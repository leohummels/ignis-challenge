class SelectItems {
    async selectItems(arr){
        const regexapp = /((.*)+(;)+(.*))/g
        const result = await arr.match(regexapp)
        return result
    }

    async matches(arr) {
        const regexTeams = /(\b\w*;\b)/g
        arr.forEach((item) => { 
            let select = item.match(regexTeams).toString().replace(/;/, '')
            return select
        }   )
    }
}

module.exports = SelectItems