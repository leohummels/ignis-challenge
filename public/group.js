function GroupsPages() {
    try {
        async function serverResponse() {
            const result = await fetch('http://localhost:3000/Matches')
            const teamData = await result.json()
            
            const arr = teamData
            arr.forEach((team)=> {
                console.log(team)
            const teams = document.querySelector(".Partidas")
            const li =  document.createElement('li');
            const content = document.createTextNode(team);

            li.appendChild(content)
            teams.appendChild(li)
            })
        }
        serverResponse()
    } catch(error) {
        console.error(error)
    }
}



const respBtn = document.querySelector('.RespButton')
respBtn.addEventListener("click", GroupsPages())

