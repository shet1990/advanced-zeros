module.exports = function getZerosCount(number, base) {
    let firstParseNumber = number;
    for (let i = 2; i <= base; i++) {
        let a = 0;
        while (base % i == 0) {
            a++;
            base = ~~(base / i);
        }
        let b = 0;
        let secondParseNumber = number;
        while (secondParseNumber / i > 0) {
            b += ~~(secondParseNumber / i);
            secondParseNumber = ~~(secondParseNumber / i);
        }
        if (firstParseNumber > b / a) {
            firstParseNumber = b / a;
        }

    }
    return ~~(firstParseNumber);
}