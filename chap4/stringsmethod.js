console.log("string properties and method")
let nam="harry bhai ---------"
console.log(nam)
console.log(nam.length)
console.log(nam.toUpperCase())
console.log(nam.toLowerCase())
console.log(nam.slice(2,4))
console.log(nam.slice(2))
console.log(nam.replace("har","per"))
console.log(nam.concat("har","per"))
let nam1="abc"
console.log(nam.concat("is a friend of ", nam1," ok "))
let nam2="       xyz    "
console.log(nam2.trim())
console.log(nam2)
let fr="lenovo"+"8th gen"
// fr[2]="ui" //strings are immutable
console.log(fr)
// quick quiz use a for loop to print

for(let a=0;a<=fr.length;a++)
{
    console.log(fr[a])
}