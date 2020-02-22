module.exports = function reverse (n) {
    n <= 0 ? n = n * -1 : n;
    let revers = String(n).split('').reverse().join('');
    return Number(revers)
}
