// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//   If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favouriteFruits = [];

for (let i=0; i<10; i++) {
    let r = Math.random()
    const fruit =  r < 0.2 ? 'Apple' : r < 0.4 ? 'Banana' : r < 0.6 ? 'Orange' : r < 0.8 ? 'Guava' : 'Mango';
    favouriteFruits.push(fruit);
}

console.log(favouriteFruits);
console.log('-----------');

for (let i=0; i<5; i++) {
    if (favouriteFruits[i] == 'Apple') {
        console.log(`I like ${favouriteFruits[i]}. Do you like it too?`);
    }

    if (favouriteFruits[i] == 'Banana') {
        console.log(`${favouriteFruits[i]} is sweet.`);
    }

    if (favouriteFruits[i] == 'Orange') {
        console.log(`Citrus ${favouriteFruits[i]} is a pleasure to eat. `);
    }

    if (favouriteFruits[i] == 'Guava') {
        console.log(`Very delicious ${favouriteFruits[i]}.`);
    }

    if (favouriteFruits[i] == 'Mango') {
        console.log(`King of fruits is ${favouriteFruits[i]}`);
    }

}