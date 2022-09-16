// const ps=require("prompt-sync");
// let prompt=ps();
let user=prompt("Enter S,W,G: ")
let CPU1=Math.floor(Math.random()*3);
let CPU=["s","w","g"][CPU1]

const match=(CPU,user)=>{
      if(CPU==user){
        return "no body wins"
      }
      else if(CPU=="s"&&user=="w"){
        return "user"
      } 
      else if(CPU=="s"&&user=="g"){
        return "user"
      }
      else if(CPU=="g"&&user=="w"){
        return "user"
        
      }
      else if(CPU=="g"&&user=="s"){
        return "CPU"
        
      }
      
      else if(CPU=="w"&&user=="s"){
        return "CPU"
        
      }
      
      else if(CPU=="w"&&user=="g"){
        return CPU
        
      }
}


let result=match(CPU,user)
document.write(`cpu is ${CPU}<br>user is ${user}<br>winner is ${result.toUpperCase()}`) 