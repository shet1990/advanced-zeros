module.exports = function getZerosCount(number, base) {
    let sumZero = 0;
    let countZero;
    let stack = [];
    let binString = '';

    while (number > 0) {
        stack.push(number % base);
        number = Math.floor(number / base);
    }
    while (stack.length) {
        binString = binString + stack.pop();
    }

    for (n = 1; countZero != 0; n++) {
        countZero = Math.floor(number / Math.pow(5, n));
        sumZero = sumZero + countZero;
    }
    return sumZero;
}