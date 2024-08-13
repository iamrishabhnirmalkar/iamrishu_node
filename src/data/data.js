const Question = [
  // Question 01 Enter your project name
  {
    id: 1,
    type: "input",
    name: "name",
    message: "Enter your project name:",
    default: "my_app",
  },
  // Question 02 You want to install Production Level Project
  {
    id: 2,
    type: "list",
    name: "Project",
    message: "You want to install Production Level Project",
    choices: ["Yes", "No"],
    default: "Yes",
  },
  // Question 03  Select your preferred DataBase:
  {
    id: 3,
    type: "list",
    name: "database",
    message: "Select your preferred DataBase:",
    choices: ["MongoDB", "SQL", "PostgreSql"],
    default: "MongoDB",
  },
];
