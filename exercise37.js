// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size = 'Large', message = 'I love JavaScript') {
    console.log(`${size} sized shirt\n${message}`);
}

make_shirt();
make_shirt('Medium');
make_shirt('Extra Large', 'See, I fit in this');