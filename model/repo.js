

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
}

module.exports = Repository