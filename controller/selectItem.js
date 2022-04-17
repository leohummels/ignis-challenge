const Repository = require('../model/repo')
const repo = new Repository

class SelectItems {
    async selectItems(arr){
        const regexapp = /((.*)+(;)+(.*))/g
        const result = await arr.match(regexapp)
        return result
    }

    async matches(arr) {
        const regexTeams = /(\b\w*;\b)/g
        const teamRepo = repo.teamsRepo
        await arr.forEach((item) =>  { 
            let select = item.match(regexTeams).toString().replace(/;/, '')
            teamRepo.push(select)
        }   )
        return teamRepo
    }

    async places(arr) {
        const regexTeams = /(\b;.*\b)/g
        const placeRepo = repo.placesRepo
    
        await arr.forEach((item) =>  { 
            let select = item.match(regexTeams).toString().replace(/;/, '')
            placeRepo.push(select)
        }   )
        console.log(placeRepo)
        return placeRepo
    }
}

module.exports = SelectItems