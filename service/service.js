const Repository = require('../model/repo')
const repo = new Repository

class Service {

    async insertRepo(arr){
        const restult = await repo.insertArr(arr) 
        console.log(arr)
    }
}

module.exports = Service