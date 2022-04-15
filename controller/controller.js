const Service = require('../service/service')
const Repository = require('../model/repo')
const SelectItems = require('./selectItem')

const service = new Service
const selectItem = new SelectItems
const repo = new Repository

class Controller {

    async getTeams(req, res){
            const dataTeams = await req.body.teams
            const result = await selectItem.selectItems(dataTeams)
            service.insertRepo(result)
            res.render('../views/layouts/resp')
    }

    /*async selectItems(arr) {
        const regexapp = /((\w)+(;)+(.*))/g
        const result = await arr.match(regexapp)
        return result
        
    }*/
}

module.exports = Controller