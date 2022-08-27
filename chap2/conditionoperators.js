const ps=require("prompt-sync");
const prompt=ps();
let a = prompt("hey whats your age")
a=Number.parseInt(a) //convert str into numb
console.log(typeof a) 
if(a<0)
{
   console.log("this is a valid age");  //alert in browser
}
else if (a<10)
{
    console.log("you are a kid");
}
else if (a<=18 && a>=9)
{
    console.log("you are a kid after 18 you can drive a car");
}
else 
{
    console.log("this is an invalid age2")
}

const expr = prompt("enter any fruit: ");
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}