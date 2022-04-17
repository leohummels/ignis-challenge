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

    async sortMatch(places, teams) {
        const arrMatch = []
        const control = []
        const placeRepo = places
        const teamRepo = teams
        let tamanho = await teamRepo.length

        do{
            let sorteio = Math.floor(Math.random() * teamRepo.length)
            let sorteioB = Math.floor(Math.random() * teamRepo.length)
            let timeA = teamRepo[sorteio]
            let timeB = teamRepo[sorteioB]

            if (timeA !== timeB) {
                let index = Math.floor(Math.random() * placeRepo.length)
                let sorteioCidade = placeRepo[index]
                if(arrMatch.length <= tamanho/3) {
                    await arrMatch.push(`${timeA} vs ${timeB} - ${sorteioCidade} - Rodada 1`)
                } else {
                    await arrMatch.push(`${timeA} vs ${timeB} - ${sorteioCidade} - Rodada 2`)
                }
            }

        }while(arrMatch.length !== tamanho)
        console.log(teams)
        return arrMatch
    }
}

module.exports = SelectItems