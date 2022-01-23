/* eslint-disable newline-after-var */
import calculateWinRatio from "./calculateWinRatio.js"

// Group the games by player
export default function groupData(data) {
    const groupedByPlayer = Object.entries(data).reduce((player, game) => {
        // Go through players A
        if (!player[game[1][1].playerA.name]) {
            player[game[1][1].playerA.name] = []
        }

        player[game[1][1].playerA.name].push(game)

        // Go through players B
        if (!player[game[1][1].playerB.name]) {
            player[game[1][1].playerB.name] = []
        }

        player[game[1][1].playerB.name].push(game)

        return player
    }, {})
    calculateWinRatio(groupedByPlayer)
}
