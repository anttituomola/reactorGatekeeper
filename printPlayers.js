export default function printPlayers(data) {
    console.log(data)
    const renderPlayers = Object.entries(data).map(player => {
        return `
        <div class="aPlayer">
            <h1>${player[1][1][1][1][0]} (${player[1][1][1][0]})</h1>
            <div class="winRatio">Win ratio: <b>${player[1][1][1][1].winRatio}</b></div>
            <div class="playedGames">Games played: <b>${player[1][1][1][1][1].length}</b></div>
            <div class"mostPlayedHand">Most played hand: <b>${player[1].mostCommondHand}</b></div>
        </div>
        `
    })

    const playersDiv = document.getElementById("players")
    playersDiv.innerHTML = renderPlayers.join("")

}