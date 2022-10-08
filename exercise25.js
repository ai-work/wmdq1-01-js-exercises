// Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

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
    }
}