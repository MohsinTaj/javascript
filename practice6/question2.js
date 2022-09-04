const ps=require("prompt-sync")
prompt=ps()
const canAge=(age)=>{
    return age>=18?true:false
 }

   let runAgain=true
while(runAgain){    
    let age=prompt("enter your age: ")
    age=Number.parseInt(age)
if(canAge(age))
{
   console.log("you can  drive")
   
}
else{
   console.log("you can not drive")
}
runAgain=confirm("do you want to play again(y/n)")
}