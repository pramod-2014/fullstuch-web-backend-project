require('dotenv').config();

const { Client } = require('pg');

const client = new Client({

  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});
async function connectDB() {
  try {
    await client.connect();
    console.log('✅ Successfully connected to PostgreSQL database!');
  } catch (error) {
    console.error('❌ Error connecting to PostgreSQL:', error.stack);
    process.exit(1);
  }
}

connectDB();

