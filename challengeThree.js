function challengeThree(arr) {
    arr.sort((a, b) => a - b);
    let minChange = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= minChange) {
            minChange += arr[i];
        } else {
            break;
        }
    }

    return minChange;
}

console.log(challengeThree([5, 7, 1, 1, 2, 3, 22])); // 20
