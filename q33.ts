let ordinal_number_array:number[]=[1,2,3,4,5,6,7,8,9];
for(let i=0;i<ordinal_number_array.length;i++)
{
    if(ordinal_number_array[i]===1)
    {
        console.log(`${ordinal_number_array[i]}st`);
    }
    else if(ordinal_number_array[i]===2)
    {
        console.log(`${ordinal_number_array[i]}nd`);
    }
    else if(ordinal_number_array[i]===3)
    {
        console.log(`${ordinal_number_array[i]}rd`);        
    }
    else
    {
        console.log(`${ordinal_number_array[i]}th`);
    }
}