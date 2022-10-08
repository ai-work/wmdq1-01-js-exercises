// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

const aliensToShoot = [];

for (let i=0; i<10; i++) {
    let r = Math.random()
    const color =  r < 0.33 ? 'Green' : r > 0.67 ? 'Red' : 'Yellow';
    aliensToShoot.push(color);
}

console.log(aliensToShoot);
console.log('-----------');

for (let i=0; i<15; i++) {
    if (aliensToShoot[i] == 'Green') {
        console.log(`Shot the Green  one at turn ${String(i+1).padStart(2, '0')}. Earned 05 points.`);
    } else if (aliensToShoot[i] == 'Yellow') {
        console.log(`Shot the Yellow one at turn ${String(i+1).padStart(2, '0')}. Earned 10 points.`);
    } else {
        console.log(`Shot the Red    one at turn ${String(i+1).padStart(2, '0')}. Earned 15 points.`);
    }
}