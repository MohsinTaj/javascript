//spread

const intro=["hey","my","name","is","mohsin","Taj"]
const copyarr=[...intro]
console.log(copyarr)
console.log(...copyarr)
// e.g:1
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null,numbers))

// e.g:1
const cars=["corola","bmw","alantra","audi"]
const copyarr1=[...cars]
console.log(...copyarr1)
// e.g1
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10
  
  // rest
const getsize=(...args)=>{
    return args.length
}
console.log(getsize(1,2,3))
console.log(getsize(1,2,3,7,98))