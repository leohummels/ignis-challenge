const Service = require('../service/service')
const {next} = require('express')


const service = new Service


class Controller {

    async sendTeams(req, res, next){
            const dataTeams = await req.body.teams
            await service.insertRepo(dataTeams)
            res.sendFile('/public/resp.html', { root: "." })
    }

    async teams(req, res){
        const rec = await service.selectTeams()
        console.log(rec)
        res.send(rec)
    } 

    async places(req, res){
        const rec = await service.selectPlaces()
        console.log(rec)
        res.send(rec)
    }

    async matches(req, res){
        const result = await service.arrangeMatch()
        res.send(result)
    }

    async groups(req, res){
        res.sendFile('/public/group.html', { root: "." })
    }
}

module.exports = Controller