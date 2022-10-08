// 17. More Guests: You just found a bigger dinner table, so now more space is available. 
//     Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.


const guests = ['Baby Mahnoor', 'Aapi Areeba', 'Aneela'];

console.log(`Hi ${guests[0]}. 
Hope this message finds you in good health. 
Hey, we are organizing our baby's 5th birthday this wekend on Sunday at 06:00 pm.
You are invited to attend your friend's birthday party with Mom and Pop. Please come and we'll enjoy.
Baby Abeel's Mom.
`);

console.log(`Assalam o alaikum ${guests[1]}!
I hope and pray that you are fine by grace of Allah.
We'll be having a birthday party on next Friday for . 
I am writing this to invite you to my birthday party this Friday.
Please join us to wish the little baby.
Baby Abeel Family.
`);

console.log(`Good morning ${guests[2]}, 
I am writing this to invite you to the birthday party for baby Abeel.
Awaiting your confirmation.
Thanks.
Abeel and Family.
`);

console.log(`---------------------------------------------------------------------------------
`);

console.log(`${guests[2]} will not be able to make it to the party.`);

console.log(`---------------------------------------------------------------------------------
`);

const newGuest = 'Haroon';

guests[2] = newGuest;

console.log(`Reminder... 
Hi ${guests[0]}, there is a party on Friday.
`);

console.log(`Reminder... 
Hi ${guests[1]}, there is a party on Friday.
`);

console.log(`Good morning ${guests[2]}, 
I am writing this to invite you to the birthday party for baby Abeel.
Even though not much time is left. Still hoping that you will make it.
Thanks.
Baby Abeel and Family.
`);

console.log(`---------------------------------------------------------------------------------
`);
console.log(`Hi all, we now have more guests coming as we have arranged bigger table for the party.`);

console.log(`---------------------------------------------------------------------------------
`);

// beginning
guests.unshift('Abrar');
// middle
guests.splice(2, 0, 'Zanjabeel');

Array.prototype.append = function (item) {
    this.push(item);
}

// end
guests.append('Izna');

console.log(guests);

console.log(`---------------------------------------------------------------------------------`);

for(let i=0; i<guests.length; i++) {
    console.log(`
Good morning ${guests[i]}, 
I am writing this to invite you to the birthday party for baby Abeel.
Please join us in this auspicious occasion.
Thanks.
Baby Abeel and Family.
`);
}
console.log(`---------------------------------------------------------------------------------
`);