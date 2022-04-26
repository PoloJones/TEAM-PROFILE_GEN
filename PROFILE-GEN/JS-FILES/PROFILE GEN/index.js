const fs = require("fs");
const inquirer = require("inquirer");

const generateTeam = require("./src/generateTeam.js");

const { createRequire } = require("module");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");