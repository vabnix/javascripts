class ParentClass {
    constructor(){
        this.gender ='Female';
    }
    printMyGender() {
        console.log("Print my gender: "+ this.gender);
    }
}

class ChildClass extends ParentClass {
    constructor() {
        super();  //If we are extending another class then we have to call parent constructor by Super
        this.name = 'Vaibhav';
        this.gender = 'Male';
    }
    printMyName(){
        console.log("Print My Name :"+ this.name + " & my gender is "+ this.gender);
    }
}

const childClassObj = new ChildClass();
childClassObj.printMyName();

const parent = new ParentClass();
parent.printMyGender();