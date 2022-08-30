//map = creates new array
//for.each loop perform operation on same array 
// array map method
console.log("map")
let arr = [45, 67, 87]
console.log(arr)
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + 1
})
console.log(a)
console.log(a.join(" & "))
// filter it filters 
console.log("filter")
let c = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let c2=c.filter((a)=>{
    return a%2==1
})
console.log(c2,c)
// reduce
console.log("reduce method")
let arr3=c.reduce((h1,h2)=>{
return h1+h2
})
console.log(arr3)
console.log("function another method")
// another method of function
const arr4=(h0,h3)=>{
    return h0+h3
}
let newarr=c.reduce(arr4)
console.log(newarr)