Array.prototype.sortAscending = function () {
    let array = this;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log([1, 3, 4, 2, 1, 5].sortAscending());
//Output : [ 1, 1, 2, 3, 4, 5 ]