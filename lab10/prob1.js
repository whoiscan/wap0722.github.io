Array.prototype.even = function () {
    return this.filter(a => a % 2 == 0);
};
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr1.even());// [2, 4, 6, 8]

Array.prototype.odd = function () {
    return this.filter(a => a % 2 != 0);
};
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr2.odd());// [1, 3, 5, 7]