let reviews: number[] = [1,2,3,4];

for(let i = 0; i < reviews.length; i++) {
    console.log(`${reviews[i]}`);
}

console.log('---------------------------------');

for(let i of reviews) {
    console.log(`${i}`);
}

console.log('---------------------------------');

let sportsOne: string[] = ["Golf", "Volleyball", "Tennis", "Basketball"];

for (let sport of sportsOne) {
    console.log(`${sport}`);
}

sportsOne.push("Baseball");
sportsOne.push("Cricket");

console.log('---------------------------------');

for (let sport of sportsOne) {
    console.log(`${sport}`);
}
 