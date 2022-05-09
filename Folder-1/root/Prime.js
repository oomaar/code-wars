for (var counter = 0; counter <= 1000; counter++) {
    var notPrime = false;

    for (var i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notPrime = true;
        }
    }

    if (notPrime === false) {
        console.log(counter);
    }

}

// 5 lines insted of 14 lines !
// the same result but refactored

// for (let c = 1; c <= 10; c++) {
//     let notPrime = false;
//     for (let i = 2; i <= c; i++) (c % i === 0 && i !== c) ? notPrime = true : null;
//     notPrime === false ? console.log(c) : null;
// }


