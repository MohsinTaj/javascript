//delete operator
let n = [1, 2, 3, 4, 5, 6]
console.log(n.length)
delete n[0]
console.log(n.length)
//concat
let n1 = [11, 12, 13, 14, 15, 16]
let n4 = [113, 122, 13, 14, 15, 16]
let newarr=n.concat(n1,n4)
console.log(newarr)
console.log(n,n1,n4)
//sort 

let n2=[8,9,2,1,4,67,75] //modifies original array alphabatically sees as string
n2.sort()
console.log(n2)
//for sorting ascendingly
let compare=(a,b)=>{
    return a-b       //for descending order b-a
}
n2.sort(compare)
console.log(n2)
//splice function= used to addd new item in an array 
let Num=[1,2,3,4,5,8,96,87] 
let deletedval=Num.splice(2,1,12,34,789) //start delete add  returns deleted values
console.log(Num)
console.log(deletedval)
console.log(typeof deletedval)

//slice 
console.log("slicing")
let num4=Num.slice(2)
let num45=Num.slice(2,4)

console.log(num4)
console.log(num45)
//reverse =reverses
n2.reverse()
console.log(n2)



