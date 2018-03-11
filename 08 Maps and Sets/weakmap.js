// map key/value pair

let cardAce = {
  name: 'Ace of Spades'
};

let cardKing = {
  name: 'King of Clubs'
};

// In your weakmap, your needs to be a JS object, not a primitive
// Holds weak references so it can garbage collect them afterwards
// If the objects is no longer being used, it will delete the entry from the map
// Not enumerable, JS dont know the size of it (objects getting garbage collected)
let deck = new WeakMap();

let key1 = {a: 1}
let key2 = {b: 2}
deck.set(key1, cardAce)
deck.set(key2, cardKing)

console.log(deck.get(key1))
