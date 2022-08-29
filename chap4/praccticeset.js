// chap4 practice set 
//Q1 lenght of a function
let a="har\""
console.log(a.length)
const sentence="the quick brown fox jumps over the lazy dog"
const word="fox2"
console.log(sentence.includes(word))
console.log(`the word "${word}" ${sentence.includes(word)?'is':'is not'} in the sentence`)
// Q2 explore the include 
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// expected output: true

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// expected output: false
//Q3 convert to lower case
let b="jelly fish"
console.log(b.toLowerCase())
// Q4 extract the amount out of this "please give 1000"
let str3="please give 1000"
let amount=Number.parseInt(str3.slice(12))
console.log(amount)
console.log(typeof amount)

// Q5  chabge string variable

let friend ="dake"
friend[2]="r"
console.log(friend)
//string is immutable