let reviews: number[] = [1,2,3,4];

for(let i = 0; i < reviews.length; i++) {
    console.log(`${reviews[i]}`);
}

console.log('---------------------------------');

for(let i of reviews) {
    console.log(`${i}`);
}