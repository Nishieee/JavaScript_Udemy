/*let js = "amazing";
if (js === "amazing") alert('js is fun')

console.log(70 + 9 + 8 - 10);
console.log("jonas");

let firstname = "nishita";
console.log(firstname);

let myCountry = "India";
let myContinent = "asis";
let myPopulation = 5;

console.log(myContinent)
console.log(myCountry)
console.log(myPopulation)

let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof javascriptIsFun)

javascriptIsFun = "yes";
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 70;
age = 31;
console.log(age);

*/

const now = 2024;
let ageNishi = now - 2002;
let ageHriday = now - 2007
console.log(ageNishi, ageHriday)

console.log(ageNishi ** 2)

const FirstName = 'Nishi';
const LastName = 'Hriday';
console.log(FirstName + ' ' + LastName)

let x = 10 + 5;
x += 10;
x++
console.log(x)

console.log(ageNishi > ageHriday)
console.log(ageHriday >= 18)

const isAdult = ageNishi >= 18;
console.log(now - 1991 > now - 2018)

const jonas = "I'm " + FirstName + " " + LastName + " and I'm " + ageNishi + " Years old"
console.log(jonas)



let a = 100;
let b = 50;
const c = a - b;

if (a > b) {
    console.log(`A is bigger by ${c}`);
} else {
    console.log("B is larger");
}

let birthyear = 1900;

let century;
if (birthyear < 2000) {
    console.log('20')
} else {
    console.log('21')
}

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */
if (BMIMark > BMIJohn) {
    console.log(`Mark\'s BMI (${BMIMark}) is higher than John\'s (${BMIJohn})!`)
} else {
    console.log(`John\'s BMI (${BMIJohn}) is higher than Mark\'s (${BMIMark})!`)
}


// type conversion
console.log(Number('Jonas')) /* --> this gives nan and the type of nan is number but it's not a valid number*/
console.log(typeof (String(13)));

// type coercion 
console.log("I am " + 23 + "years old") // the plus here will trigger coercion whenever there is operation between a string and a number it will convert the number to string 
console.log('10' - '5' - 3) // here the - operator will convert the string to number and the answer will be 2 
console.log('23' * 2) // the string will be converted to numbers and the answer will be 46 at the end 

console.log('25' / 5) //the string will be converted to numbers and the answer will be 5 at the end 

let n = '1' + 1;
n = n - 1;
console.log(n);

// Falsy values -- 0, '', undefined, nan, null


