import express from 'express'
import mysql from 'mysql2/promise'

const dbUrl = process.env.DB_URL
const db = await mysql.createConnection(dbUrl)

const app = express()
app.use(express.json())

app.get('/api/hits', async (req, res) => {
  await db.query('INSERT INTO hits (id, count) VALUES (1,1) ON DUPLICATE KEY UPDATE count=count+1;')
  const [rows] = await db.query('SELECT count FROM hits WHERE id=1')
  const hits = rows[0].count
  res.json({ hits })
})

const port = 80
const server = app.listen(port, err =>
  console[err ? 'error' : 'log'](err || `Api server running on ${port}`)
)

process.once('SIGTERM', () => {
  console.log('SIGTERM received')
  server.close(err => {
    console[err ? 'error' : 'log'](err || 'Api server closed')
    process.exit(err ? 1 : 0)
  })
})
