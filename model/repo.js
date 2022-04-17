

class Repository {

        repo =[];
        teamsRepo = [];
        placesRepo = [];


    async insertArr(arr){
        for(let i = 0; i < arr.length; i++){
            this.repo.push(arr[i])
        }
        return this.repo
    }

    async places(arr) {
        const regexTeams = /(\b;.*\b)/g
        const placeRepo = this.placesRepo
        
        if(placeRepo.length < 1){
            await arr.forEach((item) =>  { 
                let select = item.match(regexTeams).toString().replace(/;/, '')
                placeRepo.push(select)
            }   )
            return placeRepo
        } else {
            return placeRepo
        }
    }

    async matches(arr) {
        const regexTeams = /(\b\w*;\b)/g
        const teamRepo = this.teamsRepo
        if(teamRepo.length < 1){
            await arr.forEach((item) =>  { 
                let select = item.match(regexTeams).toString().replace(/;/, '')
                teamRepo.push(select)
            }   )
            return teamRepo
        } else {
            return teamRepo
        }
    }

}

module.exports = Repository