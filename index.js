const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/employee");
const inquirer = require("inquirer");

//function for terminal prompts
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
       
        if (data.usersChoice === "Manager") {
          addManager();
        } else if (data.usersChoice === "Engineer") {
          addEngineer();
        } else if (data.usersChoice === "Intern") {
          addIntern();
        } else {
          
        }
      });
  }

//called when npm start ran
buildTeam();