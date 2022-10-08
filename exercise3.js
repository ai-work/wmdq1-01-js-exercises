// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const receiver =  `AsiF iqBaL`;

console.log(receiver.toUpperCase());
console.log(receiver.toLowerCase());

const titleCase = receiver.toLowerCase().split(' ').map(function(word) { return (word.charAt(0).toUpperCase() + word.slice(1));}).join(' ');
console.log(titleCase);
