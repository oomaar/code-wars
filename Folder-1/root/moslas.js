// function odd(m) {
//     for (let i = 0; i <= m; i++) {
//         if (i % 2 === 1) {
//             console.log(i);
//         }
//     }
// }

// odd(50);

// var rows = 5;

// for (var i = 1; i <= rows; ++i) {
//     var temp = "";
//     for (var j = 1; j <= i; ++j) {
//         temp = temp + " " + j;
//     }
//     console.log(temp);
// }

function triangleOfOddNumbers(n) {
    for (var i = 1; i <= n; ++i) {
        var temp = "";
        var number = 1;
        for (var j = 1; j <= i; ++j) {
            temp = temp + " " + number;
            number += 2;
        }
        console.log(temp);
    }
}

triangleOfOddNumbers(13);

// var n = 5;
// var finaloutput = "";
// for (i = 1; i <= n; i++) {
//     var temp = "";
//     for (j = 1; j <= n; j++) {
//         temp = temp + " " + j;
//     }
//     finaloutput += temp + "\r\n";
// }
// console.log(finaloutput);