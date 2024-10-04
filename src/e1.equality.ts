function compareEquality(a, b) {
    if (a === b) {
        return "Strong Equal"
    }else if (a == b) {
        return "Weak Equal"
    }
    return "Completely Different"
}

console.log(compareEquality(5, "5"));  // Output: "Weak Equal"
console.log(compareEquality(5, 5));    // Output: "Strong Equal"
console.log(compareEquality(5, 6));    // Output: "Completely Different"