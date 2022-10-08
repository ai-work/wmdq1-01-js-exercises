// 42. Great Magicians: Start with a copy of your program from Exercise 41. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

const show_magicians = function(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const make_great = function(magicians) {
    return magicians.map(magician => {
        return `${magician}, the Great`;
    });
}

let magiciansList = ['Quentin Coldwater', 'Eliot Waugh', 'Alice Quinn'];
magiciansList = make_great(magiciansList);
show_magicians(magiciansList);