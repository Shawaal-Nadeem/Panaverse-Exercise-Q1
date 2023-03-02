"use strict";
//Question 17
console.log(`I can invite only two people for dinner`);
console.log(`${guestArray[5]} Sorry i can't invite them to dinner.`);
guestArray.pop();
for (let i = 0; i < guestArray.length; i++) {
    if (i == 0) {
        console.log(`${guestArray[i]} You are still inviting them to dinner.`);
    }
    if (i == Math.floor(guestArray.length / 2)) {
        console.log(`${guestArray[i]} You are still inviting them to dinner.`);
    }
}
guestArray = [""];
console.log(`My List is Empty`);
for (let i = 0; i < guestArray.length; i++) {
    console.log(guestArray[i]);
}
