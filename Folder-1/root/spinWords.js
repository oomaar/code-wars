// function spinWords(ring) {
//     var sttringSplit = ring.split(" ");
//     for (var i = 0; i < sttringSplit.length; i++) {
//         if (sttringSplit[i].length > 3) {
//             sttringSplit[i].split("").reverse().join("");
//         }
//     }
//     var stringJoin = sttringSplit.join(" ");
//     return stringJoin;
// }
// console.log(spinWords("words will be splitted apart"));

// function spinWords(string) {

//     //splits string into words separated by a space
//     var splitStringArray = string.split(" ");

//     for (var i = 0; i < splitStringArray.length; i++) {
//         var x;
//         //if the word is more than 5 chars, reverse the word
//         if (splitStringArray[i].length >= 5) {
//             splitStringArray[i] = splitStringArray[i].split("").reverse().join("");
//         }

//     } //end for loop

//     //join the modified array
//     var joinString = splitStringArray.join(" ");

//     return joinString;

// }	//end function

function spinWords(rings) {
    var splitRings = rings.split(" ");
    for (var i = 0; i < splitRings.length; i++) {
        if (splitRings[i].length >= 5) {
            splitRings[i] = splitRings[i].split("").reverse().join("");
        }
    }
    var joinRings = splitRings.join(" ");
    return joinRings;
}

console.log(spinWords("words will be splitted apart"));