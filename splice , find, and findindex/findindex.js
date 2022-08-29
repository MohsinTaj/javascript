const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age >10;
}
console.log(ages.findIndex(checkAge))

//e.g 2
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element => element > 13);

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

const a=["ali","ahmed","jam"]
const b = (element => element.length=4  )
console.log(a.findIndex(b))

