import printEvents from "./PrintEvents.js"

const ongoingGames = []

export default function eventHandler(data) {
    const jsonEvent = JSON.parse(data)

    if (jsonEvent.type === "GAME_BEGIN") {
        ongoingGames.push(jsonEvent)
        console.log("Game started", jsonEvent.gameId)
    } else if (jsonEvent.type === "GAME_RESULT") {
        // See if similar ID can be found in ongoingGames
        const gameid = jsonEvent.gameId

        ongoingGames.map(game => {
            if (game.gameId === gameid) {
                ongoingGames.splice(0, 1)
                console.log("game ended", jsonEvent.gameId)
            }

            return game
        })
    }
    printEvents(ongoingGames)
}
