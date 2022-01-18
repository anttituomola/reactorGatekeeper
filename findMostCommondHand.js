import calculateWinRatio from "./calculateWinRatio.js"

// Add the most common hand for each player
export default function findMostCommonHand(hands) {
    const mostCommondHand = Object.entries(hands).map(player => {
        const hashmap = player[1].handsArray.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1
            return acc
        }, {})
         player.mostCommondHand =  Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
         return player
    })
    calculateWinRatio(mostCommondHand)
}