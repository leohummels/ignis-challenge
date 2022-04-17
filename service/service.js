const SelectItems = require('../controller/selectItem')
const Repository = require('../model/repo')
const repo = new Repository
const selectItem = new SelectItems

class Service {

    async insertRepo(arr){
        const treat = await selectItem.selectItems(arr)
        const result = await repo.insertArr(treat) 
        console.log(result)
    }

    async selectTeams(){
        const rec = await repo.repo
        const teams = await repo.matches(rec)
        return teams
    }

    async selectPlaces(){
        const rec = await repo.repo
        const places = await repo.places(rec)
        return places
    }

    async arrangeMatch(){
        let places = await repo.placesRepo
        let teams = await repo.teamsRepo
        const result = await selectItem.sortMatch(places, teams)
        return result
    }

}

module.exports = Service