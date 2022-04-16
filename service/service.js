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
        const treat = await selectItem.matches(rec)
        console.log(treat)
    }
}

module.exports = Service