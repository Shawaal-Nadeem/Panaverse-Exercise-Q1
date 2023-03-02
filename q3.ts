//Question 3
let uc, lc;
uc = n.toUpperCase();
lc = n.toLowerCase();
console.log("Upper Name:", uc);
console.log("Lower Name:", lc);
for (let i = 0; i < n.length; i++) {
  if (n[0] >= "a" && n[0] <= "z") {
    n = n.charAt(0).toUpperCase() + n.slice(1);
  }
  // else if(n[i]==' ')
  // {
  //     n=n.charAt(i+1).toUpperCase()+n.slice(i+2);
  // }
}
console.log(n);
console.log("\n");