function writeCards(cards, word) {
    let messages = [];
    for (let i = 0; i < cards.length; i++) {
        messages.push(`Thank you, ${cards[i]}, for the wonderful ${word} gift!`)
    }
    return messages
}
writeCards(cards, word)

function countDown(number) {
   while (number > 0) {
        console.log(number--)
    }
  console.log(number)
}