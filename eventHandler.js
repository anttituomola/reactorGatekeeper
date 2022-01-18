let ongoingGames = []
export default function eventHandler(data) {
    const jsonEvent = JSON.parse(data)
    console.log(jsonEvent)

    if (jsonEvent.type === "GAME_BEGIN") {
        ongoingGames.push(jsonEvent)
    } 

    if (jsonEvent.type === "GAME_RESULT") {
        // see if similar ID can be found in ongoingGames
        const gameid = jsonEvent.gameId
        const gameRemoved = ongoingGames.map(game => {
            if (game.gameId === gameid) {
                ongoingGames.splice(0,1)
                console.log("DELETED")
            }
            return game
        })
    }
    console.log(ongoingGames)
}

// Example data
// {"type":"GAME_BEGIN","gameId":"57d3f9743def46be09f","playerA":{"name":"Kokko Korhonen"},"playerB":{"name":"Otso Jokinen"}}
// {"type":"GAME_RESULT","gameId":"692d4644bf5a468439b24","t":1642528166622,"playerA":{"name":"Mielikki Nieminen","played":"ROCK"},"playerB":{"name":"Tuuri Mäkelä","played":"SCISSORS"}}

/* 
0:
gameId: "c23b4ecff470fef74eee30"
playerA: {name: 'Mielikki Koskinen'}
playerB: {name: 'Untamo Järvinen'}
type: "GAME_BEGIN"

1:
gameId: "aed013d4c35f00ab5e8be3"
playerA: {name: 'Kullervo Virtanen'}
playerB: {name: 'Tapio Korhonen'}
type: "GAME_BEGIN" 
*/