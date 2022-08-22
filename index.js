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
const init = () => 
    {
    chosenOption()
    };

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
    inquirer.prompt(
        [{
            type: 'list', 
            name: 'options', 
            message: 'choose one of the following:',
            choices: 
                [{name: 'Add an Engineer!', value: 'chosenE'},
                    {name: 'Add an Intern!', value: 'chosenI'}, 
                    {name: 'Add a Manager!', value: 'chosenM'},
                    {name: 'Exit!', value: 'exit'}
                ]
        }]
    )

    .then(answer => {
        if (answer.options === 'chosenE') {
            engineerFill()
        } else if (answer.options === 'chosenI') {
            internFill()
        } else if (answer.options === 'chosenM') {
            managerFill()
        }else if(answer.options === 'exit'){
            process.exit()
        }
  
        })
}
init();
