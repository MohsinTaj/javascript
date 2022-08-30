// question 1 create array and ask user to add any number in the array
const ps = require("prompt-sync")
const prompt = ps();
// let a=prompt("enter any number ")
// a=Number.parseInt(a)
// let newarr=array.push(a)
// console.log(array)
//question 2 keeping adding numbers in the array until 0 is added
// let i
// while (i != 0) {

//     i = prompt("enter the numbers")
//     i = Number.parseInt(i)
//     let newarr = array.push(i)
//     console.log(array)
// }
//Question 3 filter from number divisible by 10
// let d = [10, 20, 9, 8, 7, 6]

// let r = d.filter((f) => {
//     return  f%10 == 0
// })
// console.log(r)
//question 4 create an array of square of numbers
// let a=[1,2,3,4,5,6,7,8,9,10]
// let n=a.map((x)=>{
//     return x*x
// })
// console.log(n)
// Question5 use reduce to calculate factorial 
let a=[1,2,3,4,5,6]
let n=a.reduce((x1,x2)=>{
    return x1*x2
})
console.log(n)