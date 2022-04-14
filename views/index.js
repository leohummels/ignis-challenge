/*class Enviar {

    constructor() {
        this.textInput = String
    }

    async textArea() {
        this.textInput = await document.querySelector("#Footbol_teams")
        console.log("2")
        return this.textInput
    }


}*/

/*const enviar = new Enviar*/

const enviar = function(){
    return document.getElementsByClassName(".Footbol_teams")
 }



document.addEventListener("click", console.log("clicou"))

//module.exports = Enviar

