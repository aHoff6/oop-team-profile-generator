const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/employee");
const inquirer = require("inquirer");


employeeArray = [];

// Function beginning prompts for user to input employee details
function teamPrompts() {
  function buildTeam() {
    inquirer
      .prompt([
        {
          //first prompt / employee type choice or exit
          type: "list",
          message: "What employee would you like to add to the team?",
          name: "usersChoice",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Exit / Generate Profile.",
          ],
        },
      ])

      .then(function (data) {
        //console.log(data)
        //if-else statement to determine which function to call based on users choice
        if (data.usersChoice === "Manager") {
          addManager();
        } else if (data.usersChoice === "Engineer") {
          addEngineer();
        } else if (data.usersChoice === "Intern") {
          addIntern();
        } else {
          buildHtml();
        }
      });
  }

  // prompts if user chose manager
  function managerPrompts() {
    return inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is their employee ID number?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is their email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
      },
    ]);
  }

  //creating a new manager object whith users inputted details
  async function addManager() {
    const managerDetails = await managerPrompts();
    const manager = new Manager(
      managerDetails.managerName,
      managerDetails.managerId,
      managerDetails.managerEmail,
      managerDetails.officeNumber
    );
    //pushes new manager object to empty employee array
    employeeArray.push(manager);
    //   console.log(manager);
    // calls build team function again to ask for more employees
    buildTeam();
  }

  // prompts if user chose engineer
  function engineerPrompts() {
    return inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is their employee ID number?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is their email address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is their GitHub username?",
      },
    ]);
  }

  //creating a new engineer object with users inputted details
  async function addEngineer() {
    const engineerDetails = await engineerPrompts();
    const engineer = new Engineer(
      engineerDetails.engineerName,
      engineerDetails.engineerId,
      engineerDetails.engineerEmail,
      engineerDetails.engineerGithub
    );
    //pushes new engineer object to empty employee array
    employeeArray.push(engineer);
    // console.log(engineer)
    // calls build team function again to ask for more employees
    buildTeam();
  }

  // prompts if user chose intern
  function internPrompts() {
    return inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is this interns name?",
      },

      {
        type: "input",
        name: "internId",
        message: "What is their employee ID number?",
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is their email address?",
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school do they attend?",
      },
    ]);
  }
  //creating a new intern object with users inputted details
  async function addIntern() {
    const internDetails = await internPrompts();
    const intern = new Intern(
      internDetails.internName,
      internDetails.internId,
      internDetails.internEmail,
      internDetails.internSchool
    );
    //pushes new intern object to empty employee array
    employeeArray.push(intern);
    //   console.log(intern)
    // calls build team function again to ask for more employees
    buildTeam();
  }

  // creates an html with
  function buildHtml() {
    console.log(employeeArray)
  }

  buildTeam();
}

teamPrompts();
