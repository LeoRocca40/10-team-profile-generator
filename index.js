// Grab constructors
const Manager = require('./library/Manager')
const Employee = require('./library/Employee')
const Intern = require('./library/Intern')
const Engineer = require('./library/Engineer')

// placeholder for team
let team = []
const createhtml = require('./src/createhtml')

// require library and storage
const inquirer = require('inquirer')
const fs = require('fs')

// Start promts for user
function managerInfo() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the manager?',
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's id number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?",
            },
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            team.push(manager)

            employeeInfo()
        });
}

const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the employee?',
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's id number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email address?",
            }
        ]) 
        .then(answers => {
            if (noMoreEmployees) {
                let teamInfo = createhtml(team)
                fs.writeFile('./src/index.html', teamInfo, (err) =>
                    err ? console.log(err) : console.log('Success!')
                );
            }
            if (makeEngineer) {
                engineerInfo()
            }
            // if(){
            //     //START NEXT FUNCTION
            // }
        }
        )
}





managerInfo()