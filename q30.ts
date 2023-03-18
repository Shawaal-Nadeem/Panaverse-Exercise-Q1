let userNameArray:string[]=['Ahsaan','Shiza','Hanaan','Admin','Manaan','Hashir'];
for (let i=0;i<userNameArray.length;i++)
{
    if(userNameArray[i]==="Admin")
    {
        console.log(`Hello ${userNameArray[i]}, would you like to see a status report?`);
    }
    else
    {
        console.log(`Hello ${userNameArray[i]}, thank you for logging in again.`);
    }
}