// e.g 1
const n1=[4,9,16,25]
const n2=n1.map(Math.sqrt)
console.log(n2)
const n3=n2.map(myfunc)
function myfunc(num){
    return num*10
}
console.log(n3)
// e.g 2
const a=[2,3,4,5]
const b=a.map(c)
function c (f)
{
 return f-1   
}
console.log(b)
// e.g 3

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

map1.set('c',23)
console.log(map1.get('c'))

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2
map1.delete('c')
console.log(map1.size)