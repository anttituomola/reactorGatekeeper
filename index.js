let dataFeed = []

// Get the data from the API
fetch("https://blooming-retreat-52483.herokuapp.com/https://bad-api-assignment.reaktor.com/rps/history/")
    .then(res => res.json())
    .then(data => {
        dataFeed = data
        decideWinner(dataFeed)
    })

// Group the games by player
function groupData(data) {
    const groupedByPlayer = Object.entries(data).reduce((player, game) => {
        // Go through players A
        if (!player[game[1][1].playerA.name]) {
            player[game[1][1].playerA.name] = []
        }

        player[game[1][1].playerA.name].push(game)

        //Go through players B
        if (!player[game[1][1].playerB.name]) {
            player[game[1][1].playerB.name] = []
        }

        player[game[1][1].playerB.name].push(game)

        return player
    }, {})
    printPlayers(groupedByPlayer)
    addHandsArray(groupedByPlayer)
}

function decideWinner(dataFeed) {
    let winnersAdded = {}
    winnersAdded = Object.entries(dataFeed.data).map(game => {
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

function addHandsArray(data) {
    console.log(data)
    const hands = Object.entries(data).map(player => {
        let handsArray = []
        player["handsArray"] = handsArray
        player[1].map(game => {
            if (player[0] === game[1][1].playerA.name) {
                player.handsArray.push(game[1][1].playerA.played)
            }

            if (player[0] === game[1][1].playerB.name) {
                player.handsArray.push(game[1][1].playerB.played)
            }
        })
        return player
    })
    findMostCommonHand(hands)
}

function findMostCommonHand(hands) {
    const mostCommondHand = Object.entries(hands).map(player => {
        const hashmap = player[1].handsArray.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1
            return acc
        }, {})
         player.mostCommondHand =  Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
         return player
    })
    console.log(mostCommondHand)
}


function printPlayers(groupedByPlayer) {
    const renderPlayers = Object.entries(groupedByPlayer).map(player => {
        return `
        <h1>${player[0]}</h1>
        <div class="winRatio"></div>
        <div class="playedGames">Games played: ${player[1].length}</div>
        <div class"mostPlayedHand">Most played hand: </div>
        `
    })

    const playersDiv = document.getElementById("players")
    playersDiv.innerHTML = renderPlayers.join("")

}