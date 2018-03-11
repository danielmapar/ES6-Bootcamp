// List of unique values
let set = new Set([5, 4, 1]);

set.add(1);
set.add(2);

console.log(set.has(1))

//set.delete(1);

for (let element of set) {
  console.log(element);
}

// No key value paring (value === key)
for (let element of set.entries()) {
  console.log(element);
}

for (let element of set.keys()) {
  console.log(element);
}

for (let element of set.values()) {
  console.log(element);
}

set.clear();
