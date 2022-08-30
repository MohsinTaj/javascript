//arrays method
//to string method
let num=[2,3,5,6,6,7]
let b=num.toString() // b is now string
console.log(b)
//join method
let c=num.join(" & ")
console.log(c,typeof c)
//pop method
let d=num.pop() //return pop function
console.log(d)
num.pop()
console.log(num)
//push method
num.push(9)
console.log(num)
let t=num.push()   //return array length
console.log(t)
//shift method   removes first element
let o=num.shift()
console.log(o,num)
let p=num.unshift(1) //add element in the first and returns length
console.log(p,num)
