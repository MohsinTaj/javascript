const a =["aa","bb","cc",null,"not present"]
let b=[11,22,33,false]
a[6]=99 //adding value in an array
console.log(a[2])
console.log(a[6]) //undefined
console.log("the no of student are", a.length)
a[0]=22 // changing the value
console.log(a[0])
console.log(typeof a)
//arrays are mutable
//quiz 
for(let i=0;i<=a.length;i++)
{
    console.log(a[i])
}