let arr = [10, 20, 30, 40, 50];

function sum(array) {
    return array.filter(a => a > 20)
        .reduce((x, y) => x + y);
}
console.log(sum(arr));
