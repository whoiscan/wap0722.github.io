//Problem1
const arr = [10, 20, 30, 40, 50];

function sum(array) {
    return array.filter(a => a > 20)
        .reduce((x, y) => x + y);
}

console.log(sum(arr));

//Problem 2
const arr1 = ['abcde', 'vwxyz', 'lmn', 'aqwerty'];

function getNewArray(array) {
    return array.filter(a => a.length >= 5 && a.includes('a'));
}

console.log(getNewArray(arr1));