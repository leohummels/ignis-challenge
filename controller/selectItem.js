class SelectItems {
    async selectItems(arr){
        const regexapp = /((\w)+(;)+(.*))/g
        const result = await arr.match(regexapp)
        return result
    }

    async matches() {
        //seleção de grupos
    }
}

module.exports = SelectItems