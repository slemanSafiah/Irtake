module.exports = function f1(str) {
    let s = "" + str;
    return s.split(' ').join('_');
}

module.exports = function f2(str) {
    let s = "" + str;
    return s.split('_').join(' ');
}