//Test Equality and Inequality
let civic:string='Civic';
let car:string='Civic';
let company:string='Honda';
console.log(civic===car);
console.log(car===company);
console.log('\n');

//Test LowerCase Function
console.log(`${civic.toLowerCase()==='civic'}`);
console.log(`${car.toLowerCase()==='Civic'}`);
console.log('\n');
//Test Numercially
console.log(10===10);
console.log(5 !== 5 );
console.log('\n');
//Test And Or Operators
let num=8;
console.log(7 > 1 && 7 < 10);
console.log(num == 5 || num == 10);
console.log('\n');
//Test whether item is in array or not
let numArray:number[]=[1,2,3,4,5,6];
console.log(numArray.includes(5));
console.log(numArray.includes(10));

