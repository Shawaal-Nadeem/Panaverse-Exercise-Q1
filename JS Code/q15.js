"use strict";
//Question 15
console.log(guestArray[2], " can`t make the dinner.");
let newPerson = "Hania Amir";
console.log("Modify list and replace ", guestArray[2], "with", newPerson);
guestArray[2] = newPerson;
for (let i = 0; i < guestArray.length; i++) {
    if (i == 2) {
        console.log("Hy", guestArray[i], "i would like to invite dinner at Spotlight Cafe");
    }
    else {
        console.log(guestArray[i]);
    }
}
console.log("\n");
