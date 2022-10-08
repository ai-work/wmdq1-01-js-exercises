// 41. Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const show_magicians = function(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const magiciansList = ['Quentin Coldwater', 'Eliot Waugh', 'Alice Quinn']

show_magicians(magiciansList);