#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold("\n#####################################################"));
console.log(chalk.bold("====================================================="));
console.log(chalk.bold("\tWelcome To ABDULLAH Currency Converter"));
console.log(chalk.bold("====================================================="));
console.log(chalk.bold("#####################################################"));
console.log("\n");
let curreny = {
    USD: 1,
    PKR: 280,
    EUR: 0.91,
    GBP: 0.76,
    TRY: 32.03,
    RUB: 92.58,
    CNY: 7.23,
    SAR: 3.75,
    OMR: 0.38,
    IND: 74.57,
};
let toArray = Object.keys(curreny);
let condition = true;
while (condition) {
    let userAnswer = await inquirer.prompt([{
            name: "fromCurrency",
            type: "list",
            message: chalk.bold.hex("#E6007A")("From which curreny you want to convert ?"),
            choices: [...toArray]
        },
        {
            name: "toCurrency",
            type: "list",
            message: chalk.bold.hex("#E6007A")("To which curreny you want to convert ?"),
            choices: [...toArray]
        },
        {
            name: "amount",
            type: "input",
            message: chalk.bold.hex("#E65800")("Enter Your Amount ?"),
        },
    ]);
    let formAmount = curreny[userAnswer.fromCurrency];
    let toAmount = curreny[userAnswer.toCurrency];
    let amount = userAnswer.amount;
    let baseAmount = amount / formAmount;
    let convertAmount = baseAmount * toAmount;
    console.log(chalk.bold.hex("#00E663")(`Your ${userAnswer.toCurrency} Amount Is : `) + chalk.bold(Math.round(convertAmount)));
    let check = await inquirer.prompt({
        name: "check",
        type: "confirm",
        message: chalk.bold.hex("#F7E700")("Do you want to convert more ?"),
        default: "false"
    });
    condition = check.check;
    if (condition == false) {
        console.log(chalk.bold("\n\n=========================================================="));
        console.log(chalk.bold("\t\tGood BY Come Back Later"));
        console.log(chalk.bold("=========================================================="));
    }
}
