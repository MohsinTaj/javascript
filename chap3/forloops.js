
// for(let a=0;a<=9;a++)
// {
// console.log("for loops");
// }
//program to add first 10 natural numbers
const ps =require("prompt-sync");
let prompt =ps();
let sum=0;
let n=prompt("enter the number")
n=Number.parseInt(n);
for (var i=0; i<=n; i++)
{
   sum+=i;

}
console.log("sum is",sum)
console.log(i)
//let scope is block level
//var scope is global level
// quiz factorial of a number
// const ps =require("prompt-sync")
// let prompt=ps()
// let a=prompt("enter a number: ")
// let b=1
// b=Number.parseInt(b)
// for(let c=1; c<=a ;c++)
// {
//    b*=c;
//    console.log("b is ",b)
// }
// console.log("factorial of number " +a+ " is "+b)
/*console.log("for in loop")
let obj={
   Mohsin:4,
   Ahsan:3.9,
   Akbar:3.8,
   Babar:3.7
}
for(let a in obj) //loops through the keys of the object 
{
   console.log(obj [a])
   console.log(obj )
   console.log("marks of "+a+"is "+obj[a])
}
let obj={
   Mohsin:4,
   Ahsan:3.9,
   Akbar:3.8,
   Babar:3.7
}
console.log("for of loop")
for (let b of "Mohsin")  //for of loop is iterable for array and strings only
{                        //loop through the values of the objects
   console.log(b)
}
*/