// 20. Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.

const languagesToLearn = [];
languagesToLearn.push('Python');
languagesToLearn.push('Go');
languagesToLearn.unshift('C');
languagesToLearn.push('Java');

console.log(languagesToLearn);

languagesToLearn[3] = 'JavaScript';

console.log(languagesToLearn);