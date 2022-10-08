// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

const aliensToShoot = [];

for (let i=0; i<10; i++) {
    let r = Math.random()
    const color =  r < 0.33 ? 'Green' : r > 0.67 ? 'Red' : 'Yellow';
    aliensToShoot.push(color);
}

console.log(aliensToShoot);
console.log('-----------');

for (let i=0; i<10; i++) {
    if (aliensToShoot[i] == 'Green') {
        console.log(`Shot the Green one at turn ${i+1}. Earned 5 points.`);
    } else {
        console.log(`Shot the Red/Yellow one at turn ${i+1}. Even better. Earned 10 points.`);
    }
}