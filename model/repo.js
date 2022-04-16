

class Repository {
    repo =[];

    async insertArr(arr){
        for(let i = 0; i <= arr.length; i++){
            this.repo.push(arr[i])
        }
        return this.repo
    }
}

module.exports = Repository