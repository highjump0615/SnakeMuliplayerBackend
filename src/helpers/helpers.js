
/**
 * convert to string with leading zeros
 * @param {*} num 
 * @param {*} size 
 */
function stringPad(num, size) {
    var s = num + '';
    while (s.length < size) {
        s = '0' + s;
    }

    return s;
}


module.exports = {
    stringPad : stringPad,
}