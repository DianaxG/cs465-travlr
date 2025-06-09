require('./db'); // connects to MongoDB
const Trip = require('./travlr');
const fs = require('fs');

const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

Trip.deleteMany({})
  .then(() => Trip.insertMany(trips))
  .then(() => {
    console.log("✅ Database successfully seeded!");
    process.exit();
  })
  .catch(err => {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  });
