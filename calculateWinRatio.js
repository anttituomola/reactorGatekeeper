import addHandsArray from "./addHandsArray.js"

export default function calculateWinRatio(data) {
        const winCount = Object.entries(data).map(player => {
        player.winCount = 0
        let i = 0
        while (i < player[1].length) {
            if (player[1][i][1][1].winner === player[0]) {
               player.winCount++
           }
            i++
        }
        return player
    })

    const winRatio = Object.entries(winCount).map(player => {
        player[1].winRatio = player[1].winCount / player[1][1].length
        return player
    })
    addHandsArray(winRatio)
}