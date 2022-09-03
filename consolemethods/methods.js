// console.log(console)
console.error("hey")
console.assert(5>53)
console.assert("err"!=false)
console.assert("err"==false)
console.clear()
obj={
    a:1,
    b:2,
    c:3
}
console.table(obj)
console.warn("stop")
console.info("hey")
console.time("A")
console.timeEnd("A")
console.time("for loop")
for(let i=0;i<5;i++)
{
    console.log(233)
}
console.timeEnd("for loop")
console.time("while loop")
let i=0
while(i<5)
{
    i++
    console.log(233)
}
console.timeEnd("while loop")
