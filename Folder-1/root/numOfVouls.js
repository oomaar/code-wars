function getCount(str) {
    var vowelsCount = 0;

    // enter your majic here
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === "a" || str[i] === "o" || str[i] === "u" || str[i] === "i" || str[i] === "e") {
    //         vowelsCount++;
    //     }
    // }

    return str.match(/[aeiou]/gi).length;
    // return vowelsCount;
}

console.log(getCount("xxxx"));