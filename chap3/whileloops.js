 const ps=require("prompt-sync")
 let prompt=ps()
// let a=prompt("enter the number");
// n=0
// while(n<a){
//     n++
//     console.log(n)
// }
let i=0
let a=1
let n=prompt("enter the no")
n=Number.parseInt(n)
do{
    console.log(i)
    i++
    a*=i    
    console.log(a)
}
while(i<n)
//Quiz sample program for do while loop
