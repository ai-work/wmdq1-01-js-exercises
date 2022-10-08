// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.

const makeSandwich = function(...ingredients) {
    console.log('Customer ordered sandwich with the following ingredients:');
    for (let i=0; i<ingredients.length; i++) {
        console.log(ingredients[i]);
    }    
}

makeSandwich('chicken patty', 'pickles', 'jalapeno', 'sweet onions', 'chipotle sause');
makeSandwich('veggie patty', 'lettuce', 'jalapeno', 'sweet onions', 'mustard sause');
makeSandwich('roasted beef', 'jalapeno', 'bbq sauce');