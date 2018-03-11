let numbers = [1, 2, 3, 4, 5];

// Operator on function signature
function sumUp(...toAdd){
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
      result += toAdd[i];
    }
    return result;
}

//console.log(sumUp(numbers));
console.log(sumUp(10, 20, 30));
