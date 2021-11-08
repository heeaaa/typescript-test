var reviews = [1, 2, 3, 4];
for (var i = 0; i < reviews.length; i++) {
    console.log("" + reviews[i]);
}
console.log('---------------------------------');
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var i = reviews_1[_i];
    console.log("" + i);
}
console.log('---------------------------------');
var sportsOne = ["Golf", "Volleyball", "Tennis", "Basketball"];
for (var _a = 0, sportsOne_1 = sportsOne; _a < sportsOne_1.length; _a++) {
    var sport = sportsOne_1[_a];
    console.log("" + sport);
}
sportsOne.push("Baseball");
sportsOne.push("Cricket");
console.log('---------------------------------');
for (var _b = 0, sportsOne_2 = sportsOne; _b < sportsOne_2.length; _b++) {
    var sport = sportsOne_2[_b];
    console.log("" + sport);
}
