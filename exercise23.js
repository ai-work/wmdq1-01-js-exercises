// 23. Conditional Tests: Write a series of conditional tests. 
// Print a statement describing each test and your prediction for the results of each test. 
// Your code should look something like this:

// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

console.log("----------------------------------");
let marks = [90, 100, 80];
console.log("marks = [90, 100, 80]");
console.log("Does marks array [90, 100, 80] has 4 elements? I predict false.");
console.log(marks.length == 4);

console.log("----------------------------------");
let number = 99;
console.log("number = 99");
console.log("Is number < 100? I predict true.");
console.log(number < 100);

console.log("----------------------------------");
let name = 'Asif';
console.log("name = 'Asif'");
console.log("Is name != 'Asif'? I predict false.");
console.log(name != 'Asif');

console.log("----------------------------------");
let car = 'cultus';
console.log("car = 'cultus'");
console.log("Is car == 'cultus'? I predict true.");
console.log(car == 'cultus');

console.log("----------------------------------");
let age = 70;
console.log("age = 70");
console.log("Is age > 70? I predict false.");
console.log(age > 70);

console.log("----------------------------------");
const classSize = 450;
console.log("classSize = 450");
console.log("Is classSize between 400 and 500? I predict true.");
console.log(classSize > 400 && classSize <= 500);

console.log("----------------------------------");
const userName = 'AsifIqbal';
console.log("userName = 'AsifIqbal'");
console.log("Is 'AsifIqbal' == 'asifiqbal'? I predict false.");
console.log(userName == 'asifiqbal');

console.log("----------------------------------");
const userNames = ['AsifIqbal', 'AhmedKhan', 'MuhammadTalha'];
console.log("userNames = ['AsifIqbal', 'AhmedKhan', 'MuhammadTalha']");
console.log("Is 'AsifIqbal' in userNames? I predict true.");
console.log(userNames.includes('AsifIqbal'));

console.log("----------------------------------");
const topics = ['Virtual Reality', 'Augmented Reality', 'Mixed Reality'];
console.log("topics = ['Virtual Reality', 'Augmented Reality', 'Mixed Reality']");
console.log("Is 'Web 3.0' in metaverse topics? I predict false.");
console.log(topics.includes('Web 3.0'));

console.log("----------------------------------");
const subjects = ['Psychology', 'Software Engineering', 'Computer Science'];
console.log("subjects = ['Psychology', 'Software Engineering', 'Computer Science']");
console.log("Is there any subject related to Computer? I predict true.");
console.log(subjects.includes('Software Engineering') || subjects.includes('Computer Science'));

