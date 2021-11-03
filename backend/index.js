const express = require('express')
const cors = require('cors')
const conectarDB = require('./config/db')
const producto = require('./routes/producto')
const app = express()

conectarDB()
app.use(express.json())

app.use(cors())

app.use('/api/productos', require('./routes/producto'))

app.listen(3000, () =>{
    console.log('Servidor ejecutandose correctamente')
})
