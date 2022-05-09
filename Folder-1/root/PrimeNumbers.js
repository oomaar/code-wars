for (let c = 1; c <= 10; c++) {
    let notPrime = false;

    for (let i = 2; i <= c; i++) (c % i === 0 && i !== c) ? notPrime = true : null;

    notPrime === false ? console.log(c) : null;
}
