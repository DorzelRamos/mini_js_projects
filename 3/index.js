const quotes = [
    "This is a quote.",
    "Together as one.",
    "I'll chase the clouds over Rubicon! Only I can fly high!",
    "I AM A STRIKEEERRRRR!",
    "There is a Mariana Trench under every city.",
    "I'm always with you sis, even when we're miles away.",
    "Build anything, Be anything!",
    "The One Piece is REEAAAAALLLLL",
    "bruh"
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }


    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}