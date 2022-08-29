// e.g: 1
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
// e.g 2
const language = [ 'JS', 'PHP', 'C', 'C++', 'Java', 'Python' ];
let [d, e, f,g,h] = language;
console.log(d, e, f,g,h);
let [first,,,,, last] = language;
console.log(`First element: ${first} & last element: ${last}.`);
 
//Output
// JS PHP C
// e.g :3
const bags=["polo", "polo1","polo2","polo3"]
let [i,,,l] = bags;
console.log(i,l);
//e.g:4


function show([d,e,f])
{
  console.log(d,e,f);
}
 
const language1 = [ 'JS', 'PHP', 'C'];
show(language1);
 
//Output
// JS PHP C
// e.g:5
// e.g :5

const last2=["a1","a2","a3","a4"]
let[p,o,q]=last2
console.log(p,o)
//e.g:6
const zz=["puppy","salvaster"]
const [dogname,catname]=zz
console.log(`the name of dog is ${dogname} and cat is ${catname}`)
const dog={
  name:'max',
  age:5,
  breed:'mountain'
}
const{name,age,breed}=dog
console.log(name,age,breed)
const cat={
  nam:'jelly',
  ag:4,
  bre:'persian'
}
const{nam:na,...rest1}=cat
console.log(rest1)
console.log(na)
const data=[
  {id:1,n:"1st"},
  {id:2,n:"2st"},
  {id:3,n:"3st"},
  {id:4,n:"4st"}
]
const  itemcut=data.splice(0,1)
console.log(itemcut)
let dn="rexi"
let cn="utia"
// dn=cn
[cn,dn]=[dn,cn]
console.log(cn)
console.log(dn)


