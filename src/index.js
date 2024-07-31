module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
    }

    let str = n + '';
    let reversedString = '';

    for (let i = 0; i < str.length; i++) {
        reversedString = str[i] + reversedString;
    }

    return +reversedString;

}
