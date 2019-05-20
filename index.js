#!/usr/bin/env node

const shelljs = require('shelljs');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

const init = () => {
    console.log(
        chalk.green(
            figlet.textSync('Create file', {
                font: "Bubble",
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );
};

const todoQuestions = () => {
    const questions = [{
            name: 'FILE',
            type: 'input',
            message: 'what is the name of the file? (without extension)'
        },
        {
            name: 'EXTENSION',
            type: 'list',
            message: 'what is the file extension?',
            choices: [".js ", ".java ", ".ts ", ".css ", ".html ", ".php "],
            filter: function(val) {
                return val.split('.')[1]
            }
        }
    ];
    return inquirer.prompt(questions);
};

const createFile = (name, extension) => {
    const pathFile = `${process.cwd()}/${name}.${extension}`;
    shelljs.touch(pathFile);
    return pathFile;
}

fileOk = filePath => {
    console.log(
        chalk.white.bgGreen.bold(
            `Well done!, the file was created in: ${filePath}`
        )
    );
}

const generateFile = async() => {
    // Show the title with figlet
    init();
    // Questions to create files, name and extension
    const responses = await todoQuestions();
    const { FILE, EXTENSION } = responses;
    // Create the file
    const pathFile = createFile(FILE, EXTENSION);
    // Add message files was created sucessfully
    fileOk(pathFile);
};

generateFile();