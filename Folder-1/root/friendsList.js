// var friends = ["lisa", "Rebeca", "Love", "menna"];
// var x = friends.filter(strr => strr.length === 4);
// console.log(x);

// function friend(friends) {
//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].length === 4) {
//             console.log(friends[i]);
//         }
//     }
// }

function friend(friends) {
    var x = friends.filter(n => n.length === 4);
    return x;
}

friend(["lisa", "Rebeca", "Love", "menna", "asasasasas", "fuck", "live", "look"]);




// function friend(friends) {
//     //your code here
//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].length === 4) {
//             console.log(friends[i]);
//         }
//     }
// }

// console.log(friend(["lisa", "Rebeca", "Love", "menna", "asasasasas", "fuck", "live", "look"]));

