let dataFeed = []

fetch("https://blooming-retreat-52483.herokuapp.com/https://bad-api-assignment.reaktor.com/rps/history/")
    .then(res => res.json())
    .then(data => {
        dataFeed = data
        checkData(data)
    })
    
function checkData(data) {
    const dataFeed = data.data
    groupData(dataFeed)
}

function groupData() {
    const groupedByPlayer = Object.entries(dataFeed.data).reduce((acc, game) => {
        if (!acc[game[1].playerA.name]) {
            acc[game[1].playerA.name] = []
        }
    
        acc[game[1].playerA.name].push(game)
    
        return acc
    }, {})
    
    printPlayers(groupedByPlayer)
}

function printPlayers(groupedByPlayer) {
    const names = Object.getOwnPropertyNames(groupedByPlayer)    
    const namesInDiv = names.map(name => {
        return `<div class="playerBox">
        <h1>${name}</h1>
        <div class="winRatio"></div>
        
        </div>`
    })

    const playersDiv = document.getElementById("players")
    playersDiv.innerHTML = namesInDiv.join("")

}