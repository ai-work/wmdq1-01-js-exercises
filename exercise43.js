// 43. Unchanged Magicians: Start with your work from Exercise 42. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

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

const magiciansList = ['Quentin Coldwater', 'Eliot Waugh', 'Alice Quinn'];
const magiciansListNew = make_great(magiciansList);
show_magicians(magiciansList);
console.log('---------------------');
show_magicians(magiciansListNew);