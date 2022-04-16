const Express = require('express')
const {engine} = require('express-handlebars')
const routes = require('./routes/routes')

const app = new Express()

app.use(Express.json())
app.use(Express.urlencoded({extended: true}))
app.use(Express.static(__dirname+'/views/layouts'))

app.use(routes)

let port = 3000
const server = app.listen(port, () => console.log(`servidor rodando na porta ${port}`))


module.exports = server
