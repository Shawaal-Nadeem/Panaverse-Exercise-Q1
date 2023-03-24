function city_country(city:string,country:string):string
{
    let combine=city+","+country;
return combine;
}

let fullName:string=city_country("Lahore","Pakistan");
console.log(`"${fullName}"`);
fullName=city_country("California","America");
console.log(`"${fullName}"`);
fullName=city_country("Istanbol","Turkey");
console.log(`"${fullName}"`);
