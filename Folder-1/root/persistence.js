// function persistence(num) {
//     if (num > 9) {
//         var num = num.split("");
//         for (let r = 0; r < num.length; r++) {
//             var count = 0;
//             num = num[r] * (num[r] + 1);
//             count++;
//         }

//         return num;
//     }
// }

// console.log(persistence("39"));

function persistence(num) {
    var times = 0;
    num = num.toString();
    while (num.length > 1) {
        times++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    return times;
}

console.log(persistence(999));