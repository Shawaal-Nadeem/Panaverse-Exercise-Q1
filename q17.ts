//Question 17
import guestArray from "./q16";
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

console.log(`My List is Empty`);

guestArray.pop();
guestArray.pop();
guestArray.pop();
guestArray.pop();
guestArray.pop();

//display list is empty
for(let i=0;i<guestArray.length;i++)
{
  console.log(guestArray[i]);
}