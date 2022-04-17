const Express = require('express')
const {engine} = require('express-handlebars')
const Controller = require('../controller/controller')

const routes = Express()
const control = new Controller

//routes.engine('handlebars', engine({defaultLayout:'main'}))
//routes.set('view engine', 'handlebars')


routes.get('/', (req, res) => res.sendFile('/public/main.html', { root: "." }));


routes.post('/add', control.getTeams, control.findMatch);
routes.get('/TeamData',  control.teams)
routes.get('/PlacesData',  control.places)



                    
//routes.post('/findMatch', control.findMatch);

module.exports = routes
