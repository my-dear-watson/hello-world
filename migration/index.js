import mysql from 'mysql2/promise'

const dbUrl = process.env.DB_URL
const db = await mysql.createConnection(dbUrl)

const statement = 'CREATE TABLE IF NOT EXISTS hits (`id` INT PRIMARY KEY, `count` INT);'
await db.query(statement)
console.log('Database Migration Successful!')
process.exit(0)