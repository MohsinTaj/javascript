// // Q1 print the marks of object using for loop
// let obj={
//     dinesh:34,
//     aker:23,
//     fann:22,
//     wqqol:12
// }
// for (let i=0; i<Object.keys(obj).length;i++)
// {
//     console.log("the marks of "+Object.keys(obj)[i]+"are "+obj[Object.keys(obj)[i]])
// // Q2 write the program using for in loop
// // }
// for (let i in obj)
// {
//     console.log("marks of "+i+" are "+obj[i])
// }
// // q4 write a program to print try again until the user enters the correct number
/*let ps=require("prompt-sync")
let prompt=ps()

let i=prompt("enter the number" )
while( i!=4)
{
    
       
        console.log("try again")
        i=prompt("enter the number" )
}
console.log("you are right")*/
// Q5 write a program using function for taking mean of 5 number
let ps=require("prompt-sync")
let prompt=ps()

const mean=(a,b,c,d,e)=>{
    a,b,c,d,e=Number.parseInt(a,b,c,d,e)

return (a+b+c+d+e)/5
}
let x=prompt("enter  number 1 : ")
let y=prompt("enter  number 2 : ")
let z=prompt(" enter  number 3: ")
let w=prompt(" enter  number 4: ")
let q=prompt("enter  number 5 : ")

console.log("mean is ",mean(x,y,z,w,q))
