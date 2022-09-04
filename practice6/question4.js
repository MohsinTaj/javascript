const ps=require("prompt-sync")
prompt=ps()
const number=(num)=>{
    return num>=4?true:false
 }

   let runAgain=true
    let num=prompt("enter any number: ")
    num=Number.parseInt(num)
if(number(num))
{
   location.href="https://google.com"
   
}

else{
   console.log("you are not allowed")
}
