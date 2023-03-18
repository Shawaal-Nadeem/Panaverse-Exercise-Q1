"use strict";
let fruitArray = ['Apple', 'Banana', 'Mango', 'Grapes', 'Peach', 'Orange'];
let favourite_Fruit = ['Apple', 'Grapes', 'Banana'];
if (fruitArray.includes('Banana')) {
    console.log('You Really Like Banana');
}
if (fruitArray.includes('Apple')) {
    console.log('You really like Apple');
}
if (fruitArray.includes('Mango')) {
    console.log('You really like Mango');
}
if (fruitArray.includes('Orange')) {
    console.log('You really like Orange');
}
if (fruitArray.includes('Peach')) {
    console.log('You really like Peach');
}
else {
    console.log("Not Found");
}
