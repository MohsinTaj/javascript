// Q:1 find age
const ps=require("prompt-sync")
const prompt=ps();
 const age=prompt("please enter your age");
// if (age>=10 && age<=20)
// {
//     console.log("you are eligible");
// }
// else{
//     console.log("you are not eligible");
// }
// Q2: above question using switch case
// switch (age)
// {
//     case 10:
//     case 11:
//     case 12:
//     case 13:
    // case 14:
    // case 15:
//     case '16':
//     case '17':
//     case '18':
//     case '19':
//     case '20':
//         console.log("you are eligible");
//         break;
//         default:
//             console.log("you cannot apply")11

// }
// Q:3 whether number is divisible by 2 and 3 or not
// age= Number.parseInt(num)
// if(age%2==0 && age%3==0)
// {
//     console.log("yes divisible by 2 and 3");
// }
// else{
//     console.log("not divisible");
// }
// Q:4 either divisible by 2 or 3
// if(age%2==0 || age%3==0)
// {
//     console.log("yes divisible by 2 and 3");
// }
// else{
//     console.log("not divisible");
// }
// Q:5 you can drive or not using ternary operator
console.log(age>18? "you can drive":"you cannot drive");