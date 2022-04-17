function viewPlaces() {
    try {
        async function serverResponse() {
            const result = await fetch('http://localhost:3000/PlacesData')
            const teamData = await result.json()
            
            const arr = teamData
            arr.forEach((team)=> {
                console.log(team)
            const teams = document.querySelector(".Places")
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

const btn2 = document.querySelector('.Places')
btn2.addEventListener("click", viewPlaces())