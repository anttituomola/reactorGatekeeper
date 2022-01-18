function printPlayers(data) {
    console.log(data)
    const renderPlayers = Object.entries(data).map(player => {
        console.log(player)
        return `
        <h1>${player[1][1][0]}</h1>
        <div class="winRatio"></div>
        <div class="playedGames">Games played: ${player[1][1].length}</div>
        <div class"mostPlayedHand">Most played hand: ${player[1].mostCommondHand}</div>
        `
    })

    const playersDiv = document.getElementById("players")
    playersDiv.innerHTML = renderPlayers.join("")

}