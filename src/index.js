import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

//const express = require('express')
const app = express()
const port = 3000



app.use(bodyParser.json())
app.use('/api', routes)

app.get('/', (req, res) => {
    res.send('Hola World! klk')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


