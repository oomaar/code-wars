const jaden = String.prototype.toJadenCase = (txt) => {
    // Split The String.
    txt = txt.split(" ");

    // holders For The New String.
    var firstLetter = [];
    var rest = [];
    var res = [];

    // Looping Through The Stirng And Creating The holder Arrays.
    txt.forEach((element, i) => {
        // Storing The First Char Of Each Item In The Array "txt".
        firstLetter.push(element.toUpperCase().charAt(0));

        // Storing The String Of In The Array "txt" Without the First Char.
        rest.push(element.slice(1, element.length).toLowerCase());

        //Storing The First Item Of The Array 'firstletter' Concat. With The First Item Of The Array Rest
        res.push(`${firstLetter[i]}${rest[i]}`);
    });
    return res.join(" ");
};


// var str = "How can mirrors be real if our eyes aren't real";
// str = str.toJadenCase();

console.log(jaden("storing the first item of the array 'firstLetter' concat. with the first item of the array rest"));

// function toJadenCase(txt) {
//     txt = txt.split(" ");
//     var rest = [];
//     var firstLetter = [];
//     var res = [];

//     txt.forEach((element, i) => {
//         rest.push(element.slice(1, element.length).toLowerCase());
//         firstLetter.push(element.toUpperCase().charAt(0));
//         res.push(`${firstLetter[i]}${rest[i]}`);
//     });
//     return res;
// }

//This is the final code found on github and that code is what they need in codewars efhamo ba2a!
// Description:

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.


// - - - - - My Solution - - - - - -

// String.prototype.toJadenCase = function () {
//     var returnString = [];
//     var words = this.toLowerCase().split(' ');

//     for (var i = 0; i < words.length; i++) {
//         word = words[i];
//         returnString.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return returnString.join(" ");
// };


// - - - explanation - - -

// - I created a dummy array (returnString)
// - Split the input string into individual words
// - Wrote a ‘for loop’
//   - Each individual word is accessed
//   - each word, treated as an array, has the element at index ‘0’ capitalized, and then the rest of the word added starting from index ‘1’, is pushed into dummy array
// - return the dummy array as a string joined with a space



// - - - alt - - -

// String.prototype.toJadenCase = function () { 
//   return this.split(" ").map(function(word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }).join(" ");
// }

// - this is very similar to my solution, except instead of using a ‘for loop’ they are using the ‘.map’ function.
// similar, but a little more sleek.




// - - - alt - - -


// String.prototype.toJadenCase = function () {
//   return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
// };

// - This is the solution I would have liked to come up with. 
// - Use regEx to find the first alpha-numeric element following a space
// - capitalize it.