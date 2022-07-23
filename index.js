const inquirer = require('inquirer')
const jest = require('jest')

class Employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email= email;
    }

}
class Manager extends Employee{
    super()
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    }
}

class Engineer extends Employee{
    super()
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    }
}

class Intern extends Employee{
    super()
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    }
}



const managerOne = new Manager('Jesse', 2222, 'Jesse@idk.com');
const managerTwo = new Manager('Felix', 3333, 'Felix@RANK1.com');
const engineerOne = new Engineer('Train', 4444, 'Train@DefoTwisted.com');
const internOne = new Intern('Gamba', 5555, 'Gamba@Twisted.com');