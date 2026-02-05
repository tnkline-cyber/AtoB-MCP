/**
 * Update Personas Database
 * Re-register all persona JSON files to database
 */

const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'atob-brain.db');
const personasDir = path.join(__dirname, 'personas');

async function updatePersonas() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        reject(err);
        return;
      }
      
      console.log('✅ Database connected');
      
      // Read all persona files
      const personaFiles = fs.readdirSync(personasDir).filter(f => f.endsWith('.json'));
      
      console.log(`\n📂 Found ${personaFiles.length} persona files:\n`);
      
      let processed = 0;
      
      personaFiles.forEach((file) => {
        const filePath = path.join(personasDir, file);
        const personaData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        const taskType = personaData.task_type;
        const isBase = personaData.is_base_persona ? 1 : 0;
        const config = JSON.stringify(personaData.persona_config);
        
        console.log(`🔄 Updating: ${taskType} (base: ${isBase})`);
        
        db.run(
          'UPDATE personas SET persona_config = ?, is_base_persona = ?, updated_at = CURRENT_TIMESTAMP WHERE task_type = ?',
          [config, isBase, taskType],
          function(err) {
            if (err) {
              console.error(`❌ Error updating ${taskType}:`, err.message);
            } else if (this.changes === 0) {
              console.log(`   ℹ️  Not found in DB, skipping: ${taskType}`);
            } else {
              console.log(`   ✅ Updated: ${taskType}`);
            }
            
            processed++;
            
            if (processed === personaFiles.length) {
              // Verify updates
              db.all('SELECT task_type, is_base_persona, updated_at FROM personas ORDER BY id', [], (err, rows) => {
                if (err) {
                  reject(err);
                  return;
                }
                
                console.log('\n📊 Database state after update:\n');
                rows.forEach(row => {
                  console.log(`   ${row.task_type}: base=${row.is_base_persona}, updated=${row.updated_at}`);
                });
                
                db.close();
                console.log('\n✅ All personas updated successfully');
                resolve();
              });
            }
          }
        );
      });
    });
  });
}

updatePersonas().catch(console.error);
