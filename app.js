const Express = require('express')
const {engine} = require('express-handlebars')

const routes = require('./routes/routes')
const app = new Express()


app.use(Express.json())
app.use(Express.urlencoded({extended: true}))

//app.engine('handlebars', engine())
//app.set('view engine', 'handlebars')
//app.set('views', '/views')

app.use('/', Express.static(`${__dirname}/public`))
//app.use('/add', Express.static(`${__dirname}/views/index.js`))

app.use(routes)

let port = 3000
const server = app.listen(port, () => console.log(`servidor rodando na porta ${port}`))


module.exports = server
