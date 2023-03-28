//Question 16
import guestArray from "./q15";
console.log("Hurrah!!! We found a bigger dinner table.");
guestArray.unshift("Shawaal");
guestArray.splice(Math.floor(guestArray.length / 2), 0, "KillJoy");
guestArray.push("Alizy");
for (let i = 0; i < guestArray.length; i++) {
  console.log(guestArray[i]);
}
console.log(`\n`);
export default guestArray;