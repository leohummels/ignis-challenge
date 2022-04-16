const Express = require('express')
const {engine} = require('express-handlebars')
const Controller = require('../controller/controller')

const routes = Express()
const control = new Controller

routes.engine('handlebars', engine({defaultLayout:'main'}))
routes.set('view engine', 'handlebars')


routes.get('/', (req, res) => res.render('../views/layouts/form'));

routes.post('/add', control.getTeams);
routes.post('/findMatch', control.findMatch);

module.exports = routes
