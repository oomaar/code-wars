function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";
    for (let i = 0; i <= numbers.length; i++) {
        format = format.replace("x", numbers[i]);
    }
    return format;
}

console.log(createPhoneNumber([0, 1, 4, 0, 1, 2, 5, 5, 5, 5]));