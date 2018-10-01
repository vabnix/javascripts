const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

//if we want to see what values are coming from different array 
// remove the spread operator and try to print the value

const AnothernewNumber = [numbers, 4];
console.log(AnothernewNumber);

const person = {
    name : 'Vaibhav'
  };
  
  const anotherPerson = {
    ...person,
    age: 28
  };
  
  console.log(anotherPerson);