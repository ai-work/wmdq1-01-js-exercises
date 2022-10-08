// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//     You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

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
Even though not much is left. Still hoping that you will make it.
Thanks.
Baby Abeel and Family.
`);