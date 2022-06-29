function printNumbers(from, to) {
    let k = from;
    let timerId = setInterval(function () {
        console.log(k);
        if (k === to) {
            clearInterval(timerId);
        }
        k++;
    }, 1000);
}

printNumbers(1, 6);