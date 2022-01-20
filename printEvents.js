export default function printEvents(data) {
    const currentGames = Object.entries(data).map(game => {
        return `
        <div class="currentGame">
        <h3>${game[1].playerA.name}</h3><lb> 
        <p>vs</p>
        <h3>${game[1].playerB.name}</h3>
        Game id: ${game[1].gameId}
        </div>
        `
    })
    
    const currentGamesEl = document.getElementById("currentGames")
    currentGamesEl.innerHTML = currentGames.join("")
    // How to render the objects?
    // How to smooth out the removed games?
}