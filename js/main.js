var numberOfHorses = 9;
console.log(numberOfHorses);

var favoriteFlower = "Dahlia";
console.log("My favorite flower is " + favoriteFlower + ".");

var birthplace = "Providence";
var birthday = "January 25";
console.log("I was born in " + birthplace + " on " + birthday + ".");

var pizzaType = "veggie";
var slicesEaten = 4;
console.log(`The ${pizzaType} pizza has ${8 - slicesEaten} slices left.`);

var applesBananas = 5 + 8;
console.log(applesBananas);

console.log(100 / 2);

var mealBudget = 30.36;
var mealCost = 10.25;
console.log(`You have $${mealBudget - mealCost} remaining.`);

var tvShows = Number("23");
var movies = 12;
console.log(tvShows + movies);

var favoriteGenre = prompt("What's your favorite music genre?");
console.log(favoriteGenre);

var oldFunds = 1500;
var newFunds = Number(prompt("How much funds were raised?"));
console.log(`The fundraiser total is now $${oldFunds + newFunds}!`);

/* Celsius to Fahrenheit */
var tempCelsius = 10;
var toFahrenheit = tempCelsius * 1.8 + 32;
console.log(
  `Outside my friend's house it's ${tempCelsius} degrees Celsius, which is ${toFahrenheit} degrees Fahrenheit.`
);

/* Tip calculator */
var mealCost = Number(prompt("How much was your meal? (ex. 25.99)"));
var tip = Number(prompt("Tip percentage? (ex. 0.15 for 15%)"));
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(prompt("How many people are eating? (Min 1)"));
console.log(
  `Your meal cost is $${mealCost}, and with the tip, it comes to $${total.toFixed(
    2
  )}. Your share is $${(total / numOfPeople).toFixed(
    2
  )}. Hope it was delicious!`
);

/* More practice */
var lightsOn = true;
var fanOn = false;
console.log(lightsOn);

console.log(210 < 124);

var populationBrazil = 207.3;
var populationChile = 17.8;
console.log(populationBrazil !== populationChile);

console.log("400" == 400);
console.log("400" != 400);
console.log("400" === 400);
console.log("400" !== 400);

var hotWeather = true;
if (hotWeather === true) {
  console.log("Wear shorts and a tank top today!");
}

var hotWeather = false;
if (hotWeather === true) {
  console.log("Wear shorts and a tank top today!");
} else {
  console.log("Grab a jacket, it might be chilly.");
}

var hotWeather = false;
var snowyWeather = true;
var windyWeather = true;

if (hotWeather === true) {
  console.log("Wear shorts and a tank top today!");
} else if (snowyWeather === true) {
  console.log("Put on a heavy jacket and boots!");
} else if (windyWeather === true) {
  console.log("Time to slip on you windbreaker.");
} else {
  console.log("Grab a sweater, it might by chilly.");
}

alert("Hi there!");

var name = prompt("What's your name?");
var birthYear = prompt("What year were you born? (ex. 1999)");
console.log(`Your name is ${name} and you're ${2021 - birthYear} years old.`);

var favoriteColor = prompt("What's your favorite color? (ex. blue)");
console.log(`Your favorite color is ${favoriteColor}!`);

var wage = Number(
  prompt("What's your hourly wage? (ex. 15.50 for $15.50/hour)")
);
var hours = Number(prompt("How many hours did you work this week? (ex. 37.5)"));
console.log(`This week you earned $${(wage * hours).toFixed(2)}. Woo hoo!`);

var twelveString = "12";
var twelveNum = 12;

if (twelveString === twelveNum) {
  console.log("The values and data types are the same for these variables.");
} else if (twelveString == twelveNum) {
  console.log("Only the values are the same.");
} else {
  console.log("Oops, these don't match up at all.");
}

var hoursSleep = Number(
  prompt("How many hours of sleep did you get last night? (0 - 12)")
);
if (hoursSleep > 12) {
  console.log("No way! Get out of here.");
} else if (hoursSleep >= 8) {
  console.log("Congrats! That's awesome :D");
} else if (hoursSleep >= 5) {
  console.log("Ok, so you got some sleep, but did you get enough?");
} else {
  console.log(
    "Get some more sleep please! How are you even functioning right now?"
  );
}

/* Chocolate */
var chocolate = Number(
  prompt("How many pieces of chocolate would you like? (0-10")
);
var leftovers = 10 - chocolate;
if (leftovers === 10) {
  alert("You didn't want any chocolate?");
} else if (leftovers > 1) {
  alert(`Great! Now there are ${leftovers} pieces of chocolate left.`);
} else if (leftovers == 1) {
  alert("Now there's only one piece of chocolate left!");
} else {
  alert("You ate all the chocolate! Yum.");
}

/* Weekday message */
var weekday = new Date().toLocaleString("en-US", { weekday: "long" });
// console.log(weekday);
if (weekday === "Monday") {
  console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
  console.log("You betta werk!");
} else if (weekday === "Wednesday") {
  console.log("Happy hump day!");
} else if (weekday === "Thursday") {
  console.log("Happy Friday Eve!");
} else if (weekday === "Friday") {
  console.log("Weekend's almost here!");
} else {
  console.log("IT'S THE WEEKEND WOO HOO!");
}

/* Time greeting */
var time = new Date().getHours();
// console.log(time);
var greeting = "Hi";
var name = "Dani";

if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  greeting = "Go to bed";
}

alert(`${greeting}, ${name}!`);

/* DOM */
var firstImg = document.querySelector("img");
firstImg.src = "img/lulu.jpeg";
firstImg.alt = "Lulu bouquet";
 
console.log(firstImg);

var intro = document.querySelector(".intro p");
intro.innerHTML = 'Available <span class="increase__size">today</span>';

var attention = document.querySelector(".increase__size");
attention.style.fontSize = "2.5em";
 
console.log(intro);


// console.log("Hi!");
var mainTitle = document.querySelector("h1");
console.log(mainTitle);

mainTitle.innerText = "Yay, Javascript!!";

var body = document.querySelector("body");
console.log(body);
body.style.backgroundColor = "#FEF2F1";


