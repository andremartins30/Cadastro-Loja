const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

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
app.use('/', productsRoutes)

app.listen(3000)
    console.log('Servidor rodando na porta: http://localhost:3000')
