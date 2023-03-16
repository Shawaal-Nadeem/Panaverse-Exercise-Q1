interface Car
{
    company:string;
    name:string;
    model:number;
    enginePower:number;
    carType:string;
}
let Sedan:Car=
{
    company:'Tesla',
    name:'Model S',
    model:123,
    enginePower:3500,
    carType:'Sedan' 
} 
console.log(Sedan.company);
console.log(Sedan.name);
console.log(Sedan.model);
console.log(Sedan.enginePower);
console.log(Sedan.carType);
console.log(Sedan);



