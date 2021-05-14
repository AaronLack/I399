//Objects
let redPanda = {
    name: "Nyima",
    age: 16, 
    breed: "Himalayan Red Panda",
    favoriteFood: "Cherries & Blueberries",
};

let redPanda2 = {
    name: "Sampson",
    age: 6, 
    breed: "Himalayan Red Panda",
    favoriteFood: "Apples & Bannanas",
};

console.log(redPanda);
console.log(redPanda2);
console.log(redPanda.favoriteFood);

let fruits = ["Apples", "Oranges", "Pineapple", "Grapes", "Bananas"];
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
fruits.unshift("Pears");
console.log("unshift: " + fruits);
fruits.push("Raspberries");
console.log("push: " + fruits);
fruits.shift();
console.log("shift: " + fruits);
fruits.pop();
console.log("pop: " + fruits);



function randomNumbers(arr) {
    const randNum = Math.floor((Math.random() * arr.length));
    console.log(arr[randNum]);
    console.log(randNum);
}
randomNumbers(fruits);