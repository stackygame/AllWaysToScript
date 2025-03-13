 "use strict";
const ps = require("prompt-sync");
const prompt = ps();

function customPrint(...args) {
    console.log(args.join(""));
}

function customInput(promptText) {
   let  x = prompt(promptText);
}

const variables = {};
console.log("l.co trademark of l.co creative science");

while (1 >0) {
    const syntax = customInput("Enter command: ");

    if (syntax.startsWith("puttext ")) {
        customPrint(syntax.slice(8));
    } else if (syntax.startsWith("create ")) {
        const parts = syntax.split(" ");
        if (parts.length === 3) {
            variables[parts[1]] = parts[2];
            customPrint(`Variable ${parts[1]} set to ${parts[2]}`);
        } else {
            customPrint("Usage: create var 2");
        }
    } else if (syntax.startsWith("pulse ")) {
        const varName = syntax.split(" ")[1];
        if (varName in variables) {
            customPrint(variables[varName]);
        } else {
            customPrint(`Variable ${varName} not found`);
        }
    } else if (syntax === "/addnum") {
        const num1 = parseFloat(customInput("Enter first number: "));
        const num2 = parseFloat(customInput("Enter second number: "));
        customPrint(`Result: ${num1 + num2}`);
    } else if (syntax === "/subtractnum") {
        const num1 = parseFloat(customInput("Enter first number: "));
        const num2 = parseFloat(customInput("Enter second number: "));
        customPrint(`Result: ${num1 - num2}`);
    } else if (syntax === "/multiplynum") {
        const num1 = parseFloat(customInput("Enter first number: "));
        const num2 = parseFloat(customInput("Enter second number: "));
        customPrint(`Result: ${num1 * num2}`);
    } else if (syntax === "/dividenum") {
        const num1 = parseFloat(customInput("Enter first number: "));
        const num2 = parseFloat(customInput("Enter second number: "));
        if (num2 !== 0) {
            customPrint(`Result: ${num1 / num2}`);
        } else {
            customPrint("Error: Division by zero is not allowed.");
        }
    } else if (syntax.startsWith("foritem ")) {
        const parts = syntax.split(" ");
        if (parts.length === 4 && parts[2] === "in") {
            const varName = parts[1];
            try {
                const end = parseInt(parts[3]);
                for (let i = 0; i < end; i++) {
                    variables[varName] = i;
                    customPrint(`${varName} = ${i}`);
                }
            } catch (error) {
                customPrint("Usage: foritem var in range");
            }
        } else {
            customPrint("Usage: foritem var in range");
        }
    } else if (syntax.startsWith("while ")) {
        const parts = syntax.split(" ");
        if (parts.length === 4 && (parts[2] === "<" || parts[2] === ">")) {
            const varName = parts[1];
            try {
                const end = parseInt(parts[3]);
                if (varName in variables) {
                    while (variables[varName] < end) {
                        customPrint(`${varName} = ${variables[varName]}`);
                        variables[varName]++;
                    }
                } else {
                    customPrint(`Variable ${varName} not found`);
                }
            } catch (error) {
                customPrint("Usage: while var < value");
            }
        } else {
            customPrint("Usage: while var < value");
        }
    } else if (syntax === "/exitXscript") {
        customPrint("Exiting program.");
        break;
    } else {
        customPrint("Unknown command");
    }
}
