'use strict';
function getContent() {
    try {
        async function serverResponse() {
            const result = await fetch('http://localhost:3000/data')
            return result
        }
        serverResponse()
    } catch(error) {
        console.error(error)
    }
}


function Games() {


    const arr =["1","2","3","4","5","6","7"]

    arr.forEach((team)=> {
    const teams = document.querySelector(".Teams")
    const li =  document.createElement('li');
    const content = document.createTextNode(team);

    li.appendChild(content)
    teams.appendChild(li)

    })

} 



const btn = document.querySelector('button')
btn.addEventListener("click", getContent())


