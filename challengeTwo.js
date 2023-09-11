function challengeTwo(arr) {
    const S = 3;
    const SS = S * S;
    let newArr = arr.map(x => x * x);
    newArr = newArr.filter(x => x <= SS).sort((a, b) => a - b);
    return newArr;
}

console.log(challengeTwo([1, 2, 3, 5, 6, 8, 9])); 
console.log(challengeTwo([-2, -1])); 
console.log(challengeTwo([-6, -5, 0, 5, 6])); 
console.log(challengeTwo([-10, 10])); 
