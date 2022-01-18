import decideWinner from "./decideWinner.js"

let dataFeed = []

// Get the data from the API
fetch("https://blooming-retreat-52483.herokuapp.com/https://bad-api-assignment.reaktor.com/rps/history/")
    .then(res => res.json())
    .then(data => {
        dataFeed = data
        decideWinner(dataFeed)
    })
