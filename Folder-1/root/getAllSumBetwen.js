const getSum = (a, b) => {
    //Good luck!
    var sum = 0;
    if (a === b) {
        return a;
    }

    if (a === 0 || a > 0 || a < 0) {
        for (let i = a; i <= b; i++) {
            sum = sum + i;
        }
    }

    if (b === 0 || b > 0 || b < 0) {
        for (let i = b; i <= a; i++) {
            sum = sum + i;
        }
    }

    return sum;
}

console.log(getSum(1, 5));

 // if () {
    //     for (let i = a; i <= b; i++) {
    //         sum = sum + i;
    //     }
    // }

     // if () {
    //     for (let i = a; i <= b; i++) {
    //         sum = sum + i;
    //     }
    // }

     // if () {
    //     for (let i = b; i <= a; i++) {
    //         sum = sum + i;
    //     }
    // }



    // if () {
    //     for (let i = b; i <= a; i++) {
    //         sum = sum + i;
    //     }
    // }