//Weather function: 
function getWeather() {
    temperatureF = prompt(`What is the temperature? `);
    alert(conversion(temperatureF));
}

function conversion(temperatureF) {
    temperatureC = Math.round((+temperatureF - 32) * (5/9));
    return temperatureC;
}

getWeather();


let sayBye = function(name) {
    console.log('Bye ' + name);
}; //This is a statement, so you need a semicolon


let sayHi = (name) => 'Hi ' + name; //Lambdas

//Vowel Print

function printVowels(message) {
    let vowels = 'aeiou';
    for(let i = 0; i < message.length; i++) {
        if(vowels.includes(message[i].toLowerCase())) {
            console.log(i + ' : ' + message[i]);
        }
    }
}
printVowels(prompt("Enter a message: "));
