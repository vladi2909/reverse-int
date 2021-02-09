module.exports = function reverse (n) {
    let res = String(n).split('').reverse().join('');
    return parseInt(res);
}
