class Person{
    constructor(){
        this.name = 'Vaibhav';
    }

    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();