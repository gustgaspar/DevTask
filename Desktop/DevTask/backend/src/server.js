const express = require('express')
const cors = require('cors')
const tasks = require('./routes/tasks')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3333


app.use(cors())
app.use(express.json())

app.use('/tasks', tasks)

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Servidor rodando!' })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})