// 34. Pizzas: Think of at least three kinds of your favorite pizza. 
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//   For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//   The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

const pizzaFlavours = ['Fajita', 'Tikka', 'Margherita'];

for (let i=0; i<pizzaFlavours.length; i++) {
    console.log(pizzaFlavours[i]);
}
console.log(`
--------------`);

for (let i=0; i<pizzaFlavours.length; i++) {
    console.log(`Pizza with ${pizzaFlavours[i]} flavour`);
}

console.log(`
--------------
We are drawn to foods that are fatty, sweet, rich and complex.
I like pizza as it has all of these components. 
Cheese is fatty, meat toppings tend to be rich and the sauce is sweet. 
And to add to that we get glutamate, which is found in the tomatoes, cheese, pepperoni and sausage.
I really love pizza!
`)