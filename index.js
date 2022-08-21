const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer= require('./lib/Engineer');
const Intern = require('./lib/Intern');
const builtTeam = []
const eAnswers = [
    {
        type: "input",
        name: "name",
        message: "what is the engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "what is the engineer's id?"
    },
    {
        type: "input",
        name: "email",
        message: "what is the engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "what is the engineer's github?"
    }
];

const intAnswers = [
    {
        type: "input",
        name: "name",
        message: "what is the intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "what is the intern's id?"
    },
    {
        type: "input",
        name: "email",
        message: "what is the intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "what is the intern's school"
    }
];

const mAnswers = [
    {
        type: "input",
        name: "name",
        message: "what is the manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "what is the manager's id?"
    },
    {
        type: "input",
        name: "email",
        message: "what is the manager's email?"
    },
    {
        type: "input",
        name: "office number",
        message: "what is the manager's office number?"
    }
];
const init = () => { chosenOption() };

// do done func

function engineerFill() {
    inquirer.prompt(eAnswers)
    .then(answers => {
        let newEng = new Engineer(answers.name, answers.id, 
            answers.email, answers.github)
            builtTeam.push(newEng)
            return chosenOption();
    })
}
function internFill() {
    inquirer.prompt(intAnswers)
    .then(answers => {
        let newIntern = new Intern(answers.name, answers.id,
            answers.email, answers.github)
            builtTeam.push(newIntern)
            return chosenOption();
    })
}
function managerFill() {
    inquirer.prompt(mAnswers)
    .then(answers => {
        let newManager = new Manager(answers.name, answers.id, 
            answers.email, answers.github)
            builtTeam.push(newManager)
            return chosenOption();
    })
}
function chosenOption(){
    inquirer.prompt([{
        type: 'list', 
        name: 'option', 
        message: 'choose something?',
        choices: [
            {name: 'engineer', value: 'newEngineer'},
            {name: 'intern', value: 'newIntern'}, 
            {name: 'manager', value: 'newManager'},
            {name: 'done', value: 'done'}
        ]
    }])
    .then( answer => {
        if (answer.option === 'newEngineer') {
            engineerFill()
        } else if (answer.option === 'newIntern') {
            internFill()
        } else if (answer.option === 'newManager') {
            managerFill()
        }else if(answer.option === 'done'){
            done()
        }
    })
}
init();


