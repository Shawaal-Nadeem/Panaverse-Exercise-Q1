"use strict";
//Question 18
let placeArray = ["Norway", "Switzerland", "Turkey", "Europe", "Germany"];
console.log(`Without Alphabetical Order`);
for (let i = 0; i < placeArray.length; i++) {
    console.log(`${placeArray[i]}`);
}
console.log(`With Alphabetical Order`);
for (let i = 0; i < placeArray.length; i++) {
    if (i === 0) {
        if (placeArray[i].charCodeAt(0) < placeArray[1].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[2].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[3].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[4].charCodeAt(0)) {
            console.log(placeArray[i]);
        }
    }
    else if (i === 1) {
        if (placeArray[i].charCodeAt(0) < placeArray[0].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[2].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[3].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[4].charCodeAt(0)) {
            console.log(placeArray[i]);
        }
    }
    else if (i === 2) {
        if (placeArray[i].charCodeAt(0) < placeArray[0].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[1].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[3].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[4].charCodeAt(0)) {
            console.log(placeArray[i]);
        }
    }
    else if (i === 3) {
        if (placeArray[i].charCodeAt(0) < placeArray[0].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[1].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[2].charCodeAt(0) &&
            placeArray[i].charCodeAt(0) < placeArray[4].charCodeAt(0)) {
            console.log(placeArray[i]);
        }
    }
    else {
        console.log(placeArray[i]);
    }
}
console.log(`Array in its Original Form:`);
for (let i = 0; i < placeArray.length; i++) {
    console.log(`${placeArray[i]}`);
}
