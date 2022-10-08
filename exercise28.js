// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

const ageOfPerson = Math.round(Math.random() * 100);

console.log(ageOfPerson);

if (ageOfPerson < 2) console.log(`That is a baby at ${ageOfPerson} years of age.`);
else if (ageOfPerson >= 2 && ageOfPerson < 4) console.log(`That is a toddler at ${ageOfPerson} years of age.`);
else if (ageOfPerson >= 4 && ageOfPerson < 13) console.log(`That is a kid at ${ageOfPerson} years of age.`);
else if (ageOfPerson >= 13 && ageOfPerson < 20) console.log(`That is a teenager at ${ageOfPerson} years of age.`);
else if (ageOfPerson >= 20 && ageOfPerson < 65) console.log(`That is an adult at ${ageOfPerson} years of age.`);
else if (ageOfPerson >= 65) console.log(`The person is an elder at ${ageOfPerson} years of age.`);
