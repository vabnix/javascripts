//Example of how reference work, if the value of name change for class person it will reflect on secondPerson
const person = {
    name:'Vaibhav'
};

const secondPerson = person;

person.name = 'Pallabi';

console.log(secondPerson);

//Example of how value work, if the value of name is changed for Person Class it will not reflect iin copied class
const firstClass = {
    name: 'Vaibhav'
};

const secondClass = {
    ...firstClass
};

firstClass.name = 'Pallabi';

console.log(secondClass);

