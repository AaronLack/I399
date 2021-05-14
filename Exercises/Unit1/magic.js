//Use strict

let number = prompt("Pick a number between 2 and 10");
configuredNumber = parseInt(((number * 2) + 5) * 50);

let birthday = prompt("Did you celebrate your birthday this year?").substring(0,1);
if(birthday[0] === 'y' || birthday[0] === 'Y') {
    configuredNumber += 1770;
}
else {
    configuredNumber += 1769;
}
let year = parseInt(prompt("What year were you born in?"));
configuredNumber -= year;

//output
let evenOdd = "";
if(number % 2 === 0) {
    evenOdd = "even";
}
else {
    evenOdd = "odd";
}

//The configured number is 200 off for age. 
alert(`you picked the ${evenOdd} number ${number} and you are ${configuredNumber} years old`);