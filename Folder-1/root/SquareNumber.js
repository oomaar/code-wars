var isSquare = function (n) {
    var root = Math.sqrt(n);
    if (n % root === 0) {
        return true;
    } else {
        return false; // fix me
    }
}

console.log(isSquare(25));