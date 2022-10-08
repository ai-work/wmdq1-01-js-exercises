// 45. Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

function Car(manufacturer, model, ...moreArgs) { // using rest arguments in variadic function
    this.manufacturer = manufacturer;
    this.model = model;
    if (moreArgs && moreArgs[0]) { // third argument is assumed to be color
        this.color = moreArgs[0];
    }
    if (moreArgs && moreArgs[1]) {
        this.year = moreArgs[1];
    }
}

const myCar = new Car('Suzuki', 'Cultus');
console.log(myCar);

const myCar2 = new Car('Suzuki', 'Cultus', color='White', year=2010);
console.log(myCar2);
