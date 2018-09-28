function printMyName(name) {
    console.log("My Name is -" + name);
}

printMyName('Vaibhav');

let printMyAnotherName = (name) => {
    console.log("My Name is -" + name);
}

printMyAnotherName('Pallabi');

// My Name is -Vaibhav
// My Name is -Pallabi

const getNames = (firstName, secondName) => {
    console.log("FirstName: "+ firstName + "\nSecond Name: "+ secondName);
}

getNames('Vaibhav', 'Pallavi')

// FirstName: Vaibhav
// Second Name: Pallavi