function getMiddle(s) {
    var position;
    var len;
    if (s.length % 2 === 0) {
        position = s.length / 2 - 1;
        len = 2;
    } else {
        position = s.length / 2;
        len = 1;
    }

    return s.substring(position, position + len);
}

console.log(getMiddle("lin"));

//What is this ?
//const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);