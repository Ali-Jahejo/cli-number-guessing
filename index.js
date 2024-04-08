#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.underline.bgYellowBright.blueBright("\n***** WELCOME TO NUMBER GUESSING GAME *****\n"));
let condition = true;
while (condition) {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const answer = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: chalk.green("Please Guess A Number Between 1-6: "),
        },
    ]);
    if (answer.userGuessedNumber === randomNumber) {
        console.log(chalk.bold.magenta("\n CONGRATULATIONS! You Guessed The Right number\n"));
    }
    else {
        console.log(chalk.red.bold(`\n You Guessed The Wrong Number.\n The Right Number Was "${randomNumber}"\n Please Try Again\n`));
    }
    let choice = await inquirer.prompt([
        {
            name: "whatToDo",
            type: "confirm",
            message: chalk.green("Wanna Try Again?"),
            default: "false",
        }
    ]);
    if (choice.whatToDo === true) {
        condition = true;
    }
    else if (choice.whatToDo === false) {
        condition = false;
    }
}
