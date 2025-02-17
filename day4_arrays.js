//activity
const power  = (par1, par2) => {
    return par1 ** par2;
   }
console.log(power(3,5));

//array
let exampleArray = [
    "item 1",
    "item 2",
    "item 3"
];
console.log(exampleArray);
console.log(exampleArray[1]); //access an item in the array

//Example of updating, edditing, adding item to array
let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"];
coffeeOrder[1] = "something new"; //updating
coffeeOrder.push("Donna - espresso"); //adding
console.log(coffeeOrder);

//activity 1
let favWeb = [
    "facebook.com",
    "google.com",
    "GitHub.com"
];
//console.log(favWeb);
favWeb.push("amazon.com", "ebay.com"); //adding items to the end
//console.log(favWeb);
favWeb.pop(); //remove the last item
console.log(favWeb);

//activity 2
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }

const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);// expected output: Array [2, 3]
console.log(firstElement);// expected output: 1

const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
console.log(array1);// expected output: Array [4, 5, 1, 2, 3]

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2)); // expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));// expected output: Array ["camel", "duck"]

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');// inserts at index 1
console.log(months);// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');// replaces 1 element at index 4
console.log(months);// expected output: Array ["Jan", "Feb", "March", "April", "May"]

let favDrink = [
    "coffee",
    "coke",
    "tea",
    "latte"
];
for (let drinkIndex = 0; drinkIndex < favDrink.length; drinkIndex ++){
console.log(favDrink[drinkIndex]);
};

let multiplesTwo = [];
for(let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`)

//Example
let randomNumber = 0;
while(randomNumber < 10){
    console.log("Random no. " + randomNumber + "\n keep looping.")
}


let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";
while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);


let drinksArray = ["coke", "pepsi", "water", "sprite"];
let drinkCost = [1, 1.5, 1, 2];
// let multiAray = [["coke", "pepsi", "water", "sprite"], [1, 1.5, 1, 2]];
let userBalance = 10;

const checkDrinks = () => {
    for (let i = 0; i < drinksArray.length; i++) {
        console.log(drinksArray[i]);
    }
}

const checkBalance = () => {
    console.log(`The available drinks are:`);
    for (let i = 0; i < drinksArray.length; i++) {
        console.log(`${drinksArray[i]}: £${drinkCost[i]}`)
    }
    console.log(`Your available balance is: £${userBalance}`);
}

const checkSelection = (choice) => {
    if (userBalance >= drinkCost[choice]) {
        console.log(`Enjoy your ${drinksArray[choice]}, you've got good taste!`);
    }
}

checkDrinks();
checkBalance();
checkSelection(3);
checkSelection(2);
checkSelection(1);
checkSelection(0);