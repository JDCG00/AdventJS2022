const gifts = ['cat', 'game', 'socks']


function wrapping(gifts) {
    let stars = ""
    let arrayGifts = []
    let i = 0
    gifts.forEach(gift => {
        stars = "*".repeat(gift.length + 2)
        console.log(gift.length);
        arrayGifts[i] = `${stars}\n*${gift}*\n${stars}`
        i++
    });
    return arrayGifts
}
console.log(wrapping(gifts))