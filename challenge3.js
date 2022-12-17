'use strict'

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(packOfGifts, reindeers) {
    let totalGiftsWeight = packOfGifts.map(gift =>{
        return gift.length 
    }).reduce((counter, giftWeight) => counter + giftWeight)
    let reindeersWeight = reindeers.map(reinder =>{
        return reinder.length
    }).reduce((counter, reindeerWeight) => counter + reindeerWeight) * 2

    return Math.trunc(reindeersWeight/totalGiftsWeight)
}

console.log(distributeGifts(packOfGifts, reindeers)); // 2