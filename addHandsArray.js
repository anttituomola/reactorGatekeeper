import findMostCommonHand from "./findMostCommondHand.js"

// Add played hands to each player
export default function addHandsArray(data) {
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