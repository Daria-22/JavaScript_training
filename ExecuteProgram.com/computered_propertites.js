/*Write a function that takes a user and returns a login count object for this user, 
mapping their name to their loginCount. Use a computed property to construct the object. 
Our pre-written code will call your function for multiple users.const users = 
*/

[
    {name: 'Amir', loginCount: 5},
    {name: 'Betty', loginCount: 16},
];

function loginCount(user) 
{
    //I don't understand why square brackets are needed here
    return {[user.name]: user.loginCount};
}

[
    loginCount(users[0]),
    loginCount(users[1]),
];

/*GOAL:
[{Amir: 5}, {Betty: 16}]
YOURS:
[{Amir: 5}, {Betty: 16}]*/