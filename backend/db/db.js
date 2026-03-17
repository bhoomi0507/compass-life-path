// PostgreSQL connection setup using pg
// Exports a pool for querying the database

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
