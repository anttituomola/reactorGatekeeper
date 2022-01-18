import groupData from "./groupData.js"

// Figure out who won
export default function decideWinner(dataFeed) {
    let winnersAdded = {}
    winnersAdded = Object.entries(dataFeed.data).map(game => {
        if (game[1].playerA.played === "SCISSORS" && game[1].playerB.played === "PAPER") {
            game[1].winner = game[1].playerA.name
        } else if (game[1].playerA.played === "PAPER" && game[1].playerB.played === "ROCK") {
            game[1].winner = game[1].playerA.name
        } else if (game[1].playerA.played === "ROCK" && game[1].playerB.played === "SCISSORS") {
            game[1].winner = game[1].playerA.name
        } else if (game[1].playerA.played === game[1].playerB.played) {
            game[1].winner = ""
        } else {
            game[1].winner = game[1].playerB.name
        }
        return game
    })
    groupData(winnersAdded)
}