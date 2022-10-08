// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
//   Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
//   Print your list to make sure you actually have an empty list at the end of your program.

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
console.log(`Hi all, Govt. has announced Covid restrictions on gatherings. 
We are allowed to invite 2 people only.`);

console.log(`---------------------------------------------------------------------------------
`);

console.log(guests);
console.log(`---------------------------------------------------------------------------------
`);

for(let i=guests.length; i>2; i--) {
    const guestRemoved = guests.pop();
    console.log(`
Hi ${guestRemoved}, 
Due to Covid restrictions, we are unable to invite you to the party.
Sorry for any inconvenience.
Thanks.
Baby Abeel and Family.
`);
}

console.log(`---------------------------------------------------------------------------------
`);
console.log(guests);
console.log(`---------------------------------------------------------------------------------
`);

for(let i=guests.length; i>0; i--) {
    const guestRemoved = guests.pop();
    console.log(`
Hi ${guestRemoved}, 
Due to extreme Covid lockdown, we have cancelled the party.
Sorry for any inconvenience.
Thanks.
Baby Abeel and Family.
`);
}

console.log(`---------------------------------------------------------------------------------
`);
console.log(guests);
console.log(`---------------------------------------------------------------------------------
`);
