const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age != 40;
}
console.log(result)
const num=[1,2,3,4,5]
const result1=num.filter(checkoddeven)
function checkoddeven(odd,even)
{
    return (even =(num%2==0)), (odd= (num%3==0))
    
}
console.log(result1)
// e.g 3
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result3 = words.filter(word => word.length > 6);

console.log(result3)

//e.g 4
const countries=['europe', 'america','russia','italy']
const result4=countries.filter(country=>country.length>6)
console.log(result4)