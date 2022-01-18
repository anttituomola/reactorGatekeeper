export default function calculateWinRatio(data) {
    //console.log(data)
    const winsCounted = data.map(player => {
        player.winCount = 0
        if (player[1][0] === player[1][1][0][1][1].winner) {
            player.winCount++
        }
        return player
    })
}