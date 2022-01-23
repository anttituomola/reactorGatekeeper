export default function printPlayers(data) {
    const renderPlayers = Object.entries(data).map(player => {
        return `
        <div class="aPlayer">
            <h2>${player[1][1][1][1][0]}</h2>
            <div class="winRatio">Win ratio: <b>${player[1][1][1][1].winRatio.toFixed(2)}</b></div>
            <div class="playedGames">Games played: <b>${player[1][1][1][1][1].length}</b></div>
            <div class="mostPlayedHand">Most played hand: <b>${player[1].mostCommondHand}</b></div>
            <h3>Past games</h3>
            ${player[1][1][1][1][1].map(game => {
                return `<div class="pastGames">
                        <b>Game ID:</b> ${game[1][1].gameId}, <b>winner:</b> ${game[1][1].winner ? game[1][1].winner : "Tie"}
                    </div>`
        }).join("")}
        </div>
        `
    })
    const playersDiv = document.getElementById("players")

    playersDiv.innerHTML = renderPlayers.join("")
}
