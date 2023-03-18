"use strict";
let personAge = 22;
let users = [];
if (users.length === 0) {
    console.log('We need to find some users');
}
if (personAge < 2) {
    console.log('Person is Baby');
}
else if (personAge === 2 || personAge < 4) {
    console.log('Person is Toddler');
}
else if (personAge === 4 || personAge < 13) {
    console.log('Person is Kid');
}
else if (personAge === 13 || personAge < 20) {
    console.log('Person is Teenager');
}
else if (personAge === 20 || personAge < 65) {
    console.log('Person is Adult');
}
else {
    console.log('Person is Elder');
}
users = [""];
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
