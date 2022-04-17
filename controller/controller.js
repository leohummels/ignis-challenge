const Service = require('../service/service')
const {next} = require('express')


const service = new Service


class Controller {

    async getTeams(req, res, next){
            const dataTeams = await req.body.teams
            await service.insertRepo(dataTeams)
            res.sendFile('/public/resp.html', { root: "." })
            //res.render('../views/layouts/resp')
            next();
    }

    async findMatch(req, res, next){
        res.sendFile('/public/resp.html', { root: "." })
        //res.render('../views/layouts/resp')
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

}

module.exports = Controller