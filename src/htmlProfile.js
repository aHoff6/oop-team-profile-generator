const buildTeamHtml = (team) => {

  const managerHtml = (manager) => {
    return `
      <div class="employee-card">
      <h2>${manager.getName()}</h2>
      <h3>${manager.getRole()}</h3>
      <ul>
          <li>ID: ${manager.getId()}</li>
          <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li>Office number: ${manager.getOfficeNumber()}</li>
      </ul>
  </div>
        `;
  };

  // build html for engineers
  const engineerHtml = (engineer) => {
    return `
      <div class="employee-card">
      <h2>${engineer.getName()}</h2>
      <h3>${engineer.getRole()}</h3>
      <ul>
          <li>ID: ${engineer.getId()}</li>
          <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
      </ul>
  </div>
        `;
  };

  // build html for interns
  const internHtml = (intern) => {
    return `
      <div class="employee-card">
      <h2>${intern.getName()}</h2>
      <h3>${intern.getRole()}</h3>
      <ul>
          <li>ID: ${intern.getId()}</li>
          <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li>School: ${intern.getSchool()}</li>
      </ul>
  </div>
        `;
  };

  return team
  .map(employee => {
    switch (employee.getRole()) {
      case "Manager":
        return managerHtml(employee);
      case "Engineer":
        return engineerHtml(employee);
      case "Intern":
        return internHtml(employee);
    }
  })
  .join("");
}
//exports function that returns html template
module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <div class="team-heading">
          <h1>Meet our Team!</h1>
        </div>
        <div class="team-area">
          ${buildTeamHtml(team)}
        </div>
      </body>
    </html>
    `;
};
