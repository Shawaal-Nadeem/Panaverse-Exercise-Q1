//Question 18
//Store the locations in a array. Make sure the array is not in alphabetical order.
let placeArray:string[] = ["Norway", "Switzerland", "Turkey", "Europe", "Germany"];
//Print your array in its original order.
console.log(`Without Alphabetical Order`);
for (let i = 0; i < placeArray.length; i++) 
{
  console.log(`${placeArray[i]}`);
}
console.log('\n');
//Print your array in alphabetical order without modifying the actual list.
let alph_order:string[]=[...placeArray].sort();
console.log(`With Alphabetical Order`);
for(let i=0;i<alph_order.length;i++)
{
  console.log(alph_order[i]);
}

console.log('\n');

//Show that your array is still in its original order by printing it.
console.log(`Array in its Original Form:`);
for (let i = 0; i< placeArray.length; i++) {
  console.log(`${placeArray[i]}`);
    }

    console.log('\n');
    //Print your array in reverse alphabetical order without changing the order of the original list.
    let rev_alph_order:string[]=[...alph_order].reverse();
    console.log("Array in Reverse Alphabetical order:");
    for(let i=0;i<rev_alph_order.length;i++)
    {
      console.log(rev_alph_order[i]);
    }
    console.log('\n');
    //Show that your array is still in its original order by printing it again
    console.log(`Array in its Original Form:`);
for (let i = 0; i< placeArray.length; i++) {
  console.log(`${placeArray[i]}`);
    }
    console.log('\n');
    
    //Reverse the order of your list. Print the array to show that its order has changed.
    placeArray.reverse();
    for(let i=0;i<placeArray.length;i++)
    {
      console.log(placeArray[i]);
      
    }
    console.log('\n');
    
    //Reverse the order of your list again. Print the list to show it’s back to its original order.
    placeArray.reverse();
    for(let i=0;i<placeArray.length;i++)
    {
      console.log(placeArray[i]);
      
    }
    console.log('\n');
    
    //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

    placeArray.sort();
    for(let i=0;i<placeArray.length;i++)
    {
      console.log(placeArray[i]);
    }
console.log('\n');
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placeArray.sort();
for(let i=0;i<placeArray.length;i++)
{
  console.log(placeArray[i]);
}
