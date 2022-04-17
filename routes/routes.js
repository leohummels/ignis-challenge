const Express = require('express')
const Controller = require('../controller/controller')

const routes = Express()
const control = new Controller


routes.get('/', (req, res) => res.sendFile('/public/main.html', { root: "." }));


routes.post('/add', control.sendTeams);
routes.get('/TeamData',  control.teams);
routes.get('/PlacesData',  control.places);
routes.get('/Matches', control.matches);
routes.get('/TeamMatch', control.groups)



module.exports = routes
