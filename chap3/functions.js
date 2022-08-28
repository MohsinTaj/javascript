function avg(x,y){
    console.log("done")
    return Math.round(1+(x+y)/2)
}
let a=1
let b=2
let c=3
console.log("Avg of a and b is",avg(a,b))
console.log("Avg of b and c is",avg(b,c))
console.log("Avg of a and c is",avg(a,c))

//another syntax of function arrow function
const sum=(p,q)=>{
    return p+q
}
console.log(sum(98,90))
//another thing
const hello=()=>
{
    console.log("hey how are son goku")
    return "hi"
}
let v=hello();
console.log(v)