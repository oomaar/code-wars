function tickets(peopleInLine) {
    // ...
    var ba2i = 0;
    var result = "";

    for (var i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[0] !== 25) {
            result = result + "NO";
        } else {
            ba2i = ba2i + peopleInLine[i];
            if (ba2i === 0 && peopleInLine[i] > 25) {
                result = result + "NO";
            } else {
                result = result + "YES";
            }
        }
    }

    return result;
}

console.log(tickets([25, 25, 100]));


// var ba2i = 0;
// var result = "";

// if (peopleInLine[0] !== 25) {
//     result = result + "NO";
//     return result;
// } else if (peopleInLine[0] === 25 && (peopleInLine[1] === 25 || peopleInLine[1] === 50) && peopleInLine.length === 2) {
//     result = result + "YES";
//     return result;
// } else if (peopleInLine.length > 2 && peopleInLine[0] === 25 && (peopleInLine[1] === 25 || peopleInLine[1] === 50)) {
//     for (var i = 2; i < peopleInLine.length; i++) {
//         ba2i = ba2i + peopleInLine[i] - 25;
//     }
// }



//First Answer Sa7 bas mesh awi
// function tickets(peopleInLine){
//     // ...
//     let x = "";
//     (peopleInLine[0] === 25 && peopleInLine[1] === 25) ? x = x + "YES" : x = x + "NO";
//     return x;
//   }


// for (var i = 0; i < peopleInLine.length; i++) {
//     if (peopleInLine[0] !== 25) {
//         result = result + "NO";
//     } else if (peopleInLine[1] === 25 || peopleInLine[1] === 50) {
//         ba2i = ba2i + peopleInLine[i] - 25;
//         if (ba2i < 0) {
//             result = result + "NO";
//         } else if (ba2i === 25 || ba2i > 25) {
//             result = result + "YES";
//         }
//     } else {
//         result = result + "NO";
//     }
// }