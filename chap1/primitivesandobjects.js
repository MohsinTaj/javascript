//primitive data types are 7 in js
//nn ss ss bb u 
let a=null;
let b=345;
let c=true;
let d=BigInt("567")+BigInt("3")
let e="harry"
let f=Symbol("i am a nice symbol")
let g=undefined 
console.log(a,b,c,d,e,f,g)
console.log(typeof c)

//objects are non primitive data types
const item={
    "harry":true,     //this is dictionary in python 
    "akbar":false,
    "lavish":667,
    "rohan":undefined
}
console.log(item["harry"])