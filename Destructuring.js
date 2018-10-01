//Types of destructuring 
// Array destructuring 
const numbers = [1, 2, 3];
[num1, num2] = numbers;

console.log("Print value in Num1:" + num1);
console.log("Print value in Num2:" + num2);

//Object destructuring
({name} = {name: 'Vaibhav', age:36});
console.log(name);
console.log(name.age);

// Stage 2 proposal for object destructuring
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}