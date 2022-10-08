// 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

// const userNames = ['admin', 'asifiqbal', 'zia.khan', 'daniyal', 'ali.r'];
const userNames = [];

const greetings = [
                    'Hello {__user__}, would you like to see a status report?',
                    'Hello {__user__}, thank you for logging in.',
                    'Hello and welcome back {__user__}'
                ]

const make_greeting = function(user) {
    if (user == 'admin' || user == 'superadmin' || user == 'sa') {
        return greetings[0].replace('{__user__}', user);
    } else {
        const randomGreetingIndex = Math.round(Math.random()*1) + 1;
        return greetings[randomGreetingIndex].replace('{__user__}', user);
    }
}

if (userNames && Array.isArray(userNames) && userNames.length > 0) {
    for(let idx=0; idx<userNames.length; idx++) {
        console.log(make_greeting(userNames[idx]));
    }
} else {
    console.log('No users exist to send greetings to. We need to find some users!');
}