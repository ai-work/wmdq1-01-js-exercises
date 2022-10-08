// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

const receiver =  `AsiF iqBaL`;

const titleCase = receiver.toLowerCase().split(' ').map(function(word) { return (word.charAt(0).toUpperCase() + word.slice(1)); } ).join(' ');

// How following title case code works.

// 1. Convert string to lower case.
//.toLowerCase() // it becomes 'asif iqbal';
  
// 2. Split the string into array of strings
// .split(' ') // it becomes an array ['asif', 'iqbal'];
       
// 3. calling map over each elemnt of array and work on it to make it title case as in 3a below
// .map(
    // function(word) {
  
    // 3a. get first character of each array element and convert to uppercase 
    //      plus slice the word to remove frst character an dget remeaining character sin element
        
            // return (word.charAt(0).toUpperCase() + word.slice(1));
              /* Map process
                1st word: 'asif'    => (word.charAt(0).toUpperCase() + word.slice(1));
                                    'asif'.charAt(0).toUpperCase() + 'asif'.slice(1);
                                          'A'                     +     'sif';
                                    return 'Asif';
                2nd word: 'iqbal'      => (word.charAt(0).toUpperCase() + word.slice(1));
                                    'iqbal'.charAt(0).toUpperCase()   + 'iqbal'.slice(1);
                                          'I'                     +     'qbal';
                                    return 'Iqbal';                                                        
        }
        End of the map() method */

// 4. After map has worked on each element, it returns array with processed elements. 
//    Now join(' ') is called on array to join elements using provided delimiter.
// .join(' ') // ['Asif', 'Iqbal'] become 'Asif Iqbal'

console.log(titleCase);
