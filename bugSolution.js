function addSafe(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error("Both parameters must be numbers")
    }
    return a + b;
}

console.log(addSafe(1,2));
console.log(addSafe(1,'2')); // throws error