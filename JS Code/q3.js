"use strict";
//Question 3
let uc, lc, tc;
let fullName = "shawaal nadeem";
let firstName = '', lastName = '';
let temp = fullName.indexOf(' ');
uc = fullName.toUpperCase();
lc = fullName.toLowerCase();
console.log("Upper Case:", uc);
console.log("Lower Case:", lc);
for (let i = 0; i < fullName.length; i++) {
    if (i === 0) {
        if (fullName[i] >= "a" && fullName[i] <= "z") {
            firstName = fullName[i].toUpperCase() + fullName.slice(i + 1, temp);
        }
    }
    if (i === temp) {
        if (fullName[temp + 1] >= 'a' && fullName[temp + 1] <= 'z') {
            lastName = fullName[temp + 1].toUpperCase() + fullName.slice(temp + 2);
        }
    }
}
tc = firstName + ' ' + lastName;
console.log(`Title Case: ${tc}`);
console.log("\n");
