// alert prompt & confirm  all these have some limitations
alert("hello world")
let a=prompt("enter a no",576)
a=Number.parseInt(a)
let write=confirm("do you want it to wrrite to the page")
if(write){
    document.write(a)     //prints on the browser screen
    alert ("you enter a of type "+(typeof a))
}
else{
    document.write("please allow me to write")
}
