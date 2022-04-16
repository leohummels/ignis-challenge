const Service = require('../service/service')
const Repository = require('../model/repo')
const SelectItems = require('./selectItem')

const service = new Service
const repo = new Repository

class Controller {

    async getTeams(req, res){
            const dataTeams = await req.body.teams
            service.insertRepo(dataTeams)
            res.render('../views/layouts/resp')
    }

    async findMatch(req, res){
        const rec = service.selectTeams()
        console.log(rec)
        res.render('../views/layouts/resp')
    }


}

module.exports = Controller