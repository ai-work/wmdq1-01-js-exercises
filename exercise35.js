// 35. Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. 
//   You could print a sentence such as Any of these animals would make a great pet!

const animalsWithFur = ['Cat', 'Dog', 'Bear'];

for (let i=0; i<animalsWithFur.length; i++) {
    console.log(animalsWithFur[i]);
}

console.log(`
------------
`);

for (let i=0; i<animalsWithFur.length; i++) {
    if (animalsWithFur[i] == 'Dog') console.log(`${animalsWithFur[i]} makes a great pet`);
    else if (animalsWithFur[i] == 'Cat') console.log(`${animalsWithFur[i]} is a cute pet`);
    else console.log(`${animalsWithFur[i]} has fur on its body`);
}

console.log(`
------------

All these anumals have species with variety of fur on their body.
Fur may be soft or silky with log or short hairs.
`
)