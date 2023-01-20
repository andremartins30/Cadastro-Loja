const express = require('express')
const exphbs = require('express-handlebars')
require('dotenv').config()

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

const port = process.env.PORT || 3000
const conn = require ('./db/conn.js')

const productsRoutes = require('./routes/ProductRoutes')

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
}))

app.use(express.json())

app.use(express.static('public'))

app.use('/products', productsRoutes)

app.listen(port, () => {
    console.log('Servidor rodando na porta: http://localhost:3000/products')
})

