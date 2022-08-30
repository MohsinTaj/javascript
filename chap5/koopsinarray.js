let num=[1,2,4,98,90]
for(let i=0;i<=num.length;i++)
{
    console.log(num[i])

}
//foreach loop
console.log("foreach")
num.forEach((elements)=>{
    console.log(elements*elements)
})
//array.form
//it is used in html form because for each loop cant run without array.form
let nam="Mohsin"
let arr=Array.from(nam)
console.log(arr)
let c=arr.join(" & ")
console.log(c)
//for of loop
for(let a of num){
    console.log(a)
}
//for in loop
for(let b in num){   //keys print
    console.log(b)
}