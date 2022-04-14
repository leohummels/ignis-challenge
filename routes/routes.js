const Express = require('express')
const {engine} = require('express-handlebars')

const routes = Express()

routes.engine('handlebars', engine({defaultLayout:'main'}))
routes.set('view engine', 'handlebars')

routes.get('/', (req, res) => res.render('../views/layouts/form'));

routes.post('/add', (req, res) => {
                const dataTeams = req.body.teams
                res.render('../views/layouts/resp')
                
                }   
        );

module.exports = routes
