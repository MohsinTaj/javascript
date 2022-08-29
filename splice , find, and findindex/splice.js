//e.g 1

const fruits=["apple", "graphes","pineapple"]
fruits.splice(2,2)
//e.g 2
console.log(fruits)
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 0,"lemon","kiwi");
console.log(fruits1)
//e.g 3
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 0, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]