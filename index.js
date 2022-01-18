import decideWinner from "./decideWinner.js"
import eventHandler from "./eventHandler.js"

let dataFeed = []

// Get the data from the API
fetch("https://blooming-retreat-52483.herokuapp.com/https://bad-api-assignment.reaktor.com/rps/history/")
    .then(res => res.json())
    .then(data => {
        dataFeed = data
        decideWinner(dataFeed)
    })

    // Listen for game events
    const socket = new WebSocket("ws://bad-api-assignment.reaktor.com/rps/live/")

    socket.addEventListener("open", event => socket.send("Hello there!"))
    socket.addEventListener("message", event => {
        eventHandler(JSON.parse(event.data))
    })
