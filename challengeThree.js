function challengeThree(arr) {
    arr.sort((a, b) => a - b);
    let minChange = 3;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= minChange) {
            minChange += arr[i];
        } else {
            break;
        }
    }

    return minChange;
}

console.log(challengeThree([1, 2, 3, 5, 6, 8, 9, 10, 14, 16])); // prueba de Acero Garcia Fabian 
console.log(challengeThree([5, 7, 1, 1, 2, 3, 22]));
console.log(challengeThree([1, 1, 1, 1, 1]));
console.log(challengeThree([1, 5, 1, 1, 1, 10, 15, 20, 100]));
