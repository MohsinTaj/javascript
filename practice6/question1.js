const ps=require("prompt-sync")
prompt=ps()

let age=prompt("enter your age: ")
    age=Number.parseInt(age)
const canAge=(age)=>{
   return age>=18?true:false
}
if(canAge(age))
{
   console.log("you can  drive")
   
}
else{
   console.log("you can not drive")
}