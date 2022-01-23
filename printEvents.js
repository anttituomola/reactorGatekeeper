export default class printEvents {
    printEvents(data) {
        var currentGames = Object.entries(data).map(game => {
            return `
            <div class="currentGame">
            <h2>Ongoing game</h2>
            <h3>${game[1].playerA.name}</h3><lb> 
            <p>vs</p>
            <h3>${game[1].playerB.name}</h3>
            Game id: ${game[1].gameId}
            </div>
            `
        })

        const currentGamesEl = document.getElementById("currentGames")
        currentGamesEl.innerHTML = currentGames.join("")
        // How to smooth out the removed games?
    }

    deleteEvent(gameId, data) {
        const deleteEvent = Object.entries(data).map(game => {
            if (game[1].gameId === gameId) {
            }
        })
    }
} 
