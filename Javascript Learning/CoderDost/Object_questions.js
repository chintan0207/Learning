// 1 console.log(Math.round(Math.random() * 10));

// 2 Create an object called country for a country of your choice, containing properties name , capital, language, population and neighbors

// Increase the country population by two million using dot notation.
// Decrease the country population by one million using bracket notation.
// Make language value in Uppercase.

let country = {
    name: "india",
    capital:"delhi",
    language:"gujrati",
    population:140000000,
    neighbors:"china"
}


country.population += 200000000;
country["population"] -=10000000

country.language = country.language.toUpperCase();
console.log(country)


// 3 Create a method describeCar inside car object in which you have to print like this in console using template literals

// [From video lecture 4.3]

// Company of my car is ** . It color is And Model of my car is __**

let car = {
    color: "Red",
    model: 2023,
    company: "Audi",
    describeCar: function(){
        console.log(`Company of my car is ${this.company}. It color is ${this.color} And Model of my car is ${this.model} `);
    }
}
console.log(car);
console.log(car.describeCar());


// 4 Generate random numbers between 0 and 10 using trunc method of MATH object
function getRandomInt(min, max) {
    return Math.trunc(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomInt(0, 10);
console.log(randomNumber);


