function challengeOne(arr) {
    const S = 3;
    let newArr = [];
    arr.forEach(num => {
        let strNum = String(num);
        let tempNum = '';
        for (let i = 0; i < strNum.length; i++) {
            if (parseInt(strNum[i]) < S) {
                tempNum += strNum[i];
            }
        }
        if (tempNum.length !== 0) {
            newArr.push(parseInt(tempNum));
        }
    });
    return newArr.reverse();
}

console.log(challengeOne([1, 2, 3, 4, 5, 6])); 

