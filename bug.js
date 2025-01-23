function add(a, b) {
  return a + b;
}

console.log(add(1, '2')); // Output: "12"

//This is because JavaScript performs string concatenation when one of the operands is a string.  If you want to add numbers, you should explicitly convert the string to a number before adding.

function addSafe(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error("Both parameters must be numbers")
    }
    return a + b;
}

console.log(addSafe(1,2));
console.log(addSafe(1,'2')); // throws error