// map key/value pair

let cardAce = {
  name: 'Ace of Spades'
};

let cardKing = {
  name: 'King of Clubs'
};

// new es6 object
//let deck = new Map([['as', cardAce], ['kc', cardKing]]);
let deck = new Map();
deck.set('as', cardAce)
deck.set('kc', cardKing)

console.log(deck)
console.log(deck.size)

// overwrite key/value pair
deck.set('as', null)

for (let entry of deck) { // for (let entry of deck.entries()) {
  console.log('entry: ', entry)
}

deck.delete('as')
console.log(deck.get('as'))

// Delete all key/value pairs
//deck.clear()

console.log(deck.keys())
let it = deck.keys();

console.log(deck.values())
let it2 = deck.values();

for (let key of it) {
  console.log('Key: ', key)
}

for (let key of it2) {
  console.log('Value: ', key)
}
