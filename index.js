let dataFeed = []

// Get the data from the API
fetch("https://blooming-retreat-52483.herokuapp.com/https://bad-api-assignment.reaktor.com/rps/history/")
    .then(res => res.json())
    .then(data => {
        dataFeed = data
        groupData(dataFeed)
        decideWinner(dataFeed)
    })

// Group the games by player
function groupData(data) {
    const groupedByPlayer = Object.entries(data.data).reduce((player, game) => {
        // Go through players A
        if (!player[game[1].playerA.name]) {
            player[game[1].playerA.name] = []
        }
    
        player[game[1].playerA.name].push(game)

        //Go through players B
        if (!player[game[1].playerB.name]) {
            player[game[1].playerB.name] = []
        }
    
        player[game[1].playerB.name].push(game)
    
        return player
    }, {})
}

function decideWinner(dataFeed) {
    console.log(dataFeed.data)
    let winnersAdded = {}
    winnersAdded = Object.entries(dataFeed.data).map(game => {
        console.log(game)
        if (game[1].playerA.played === "SCISSORS" && game[1].playerB.played === "PAPER") {
            game[1].winner = "playerA"
        } else if (game[1].playerA.played === "PAPER" && game[1].playerB.played === "ROCK") {
            game[1].winner = "playerA"
        } else if (game[1].playerA.played === "ROCK" && game[1].playerB.played === "SCISSORS") {
            game[1].winner = "playerA"
        } else if (game[1].playerA.played === game[1].playerB.played) {
            game[1].winner = ""
        } else {
            game[1].winner = "playerB"
        }
        return game
    })
    groupData(winnersAdded)
}

function printPlayers(groupedByPlayer) {
    const renderPlayers = Object.entries(groupedByPlayer).map(player => {
        console.log(player)
        return `
        <h1>${player[0]}</h1>
        <div class="winRatio"></div>
        `
    })

    const playersDiv = document.getElementById("players")
    playersDiv.innerHTML = renderPlayers.join("")

}