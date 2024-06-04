//'use strict';
// let drivers = false;
// const drive = true;

// if (drive) driver = true;
// if (driver) console.log("i can drive")


// function nishi() {
//     console.log("my name is nishi :)");
// }

// nishi();

// function foodprocessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `i've had juice with ${apples} apples and  ${oranges} oranges`
//     return juice;

// }

// foodprocessor(10, 2)

// const goodjuice = foodprocessor(5, 6)
// console.log(goodjuice)




// const calcage1 = function (year) {
//     return 2024 - year;
// }
// console.log(calcage1(1000))


// console.log(calcage2(1100))
// function calcage2(year1) {
//     return 2024 - year1;
// }

// const age3 = year => 2024 - year
// console.log(age3(1000))

// const retirement = birthyear => {
//     const age = 2024 - birthyear;
//     const retire = 60 - age;
//     console.log(`${retire} years left`)
// }

// console.log(retirement(2002));

// const retirement = (birthyear, nameofperson) => {
//     const age = 2024 - birthyear;
//     const retire = 60 - age;
//     return `${nameofperson} retires in ${retire} years `
// }

// console.log(retirement(2002, 'nishi'));

// function cutfruits(fruits) {
//     return fruits * 6

// }

// function foodprocessor(apples, oranges) {

//     console.log(apples, oranges);
//     const juice = `i've had juice with ${cutfruits(apples)} apples and  ${cutfruits(oranges)} oranges`
//     return juice;
// }

// console.log(foodprocessor(10, 4))

// function showThis() {
//     console.log(this); // window
// }
// showThis();

// const person = {
//     name: 'Alice',
//     greet: function () {
//         console.log(this.name);
//     }
// };
// person.greet(); // Alice


// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// for (let i = 5; i <= 10; i++) {
//     console.log(`I am ${i}`)
// }



// const friends = new Array('nishi', 'hriday', 'rishi', 'aman')
// console.log(friends[3])
// console.log(friends.length)

// friends[3] = 'lol'
// console.log(friends)


// friends.pop()
// console.log(friends)


// const popped = friends.pop()
// console.log(popped)

// console.log(friends)

// console.log(friends.indexOf('nishi'))
// console.log(friends.indexOf('a'))


// console.log(friends.includes('nishi'))
// console.log(friends.includes('rishi'))



// if (friends.includes('rishi')) {
//     console.log('yayyyy')
// } else {
//     console.log('nayy')
// }




// const calcTip = bill => {
//     if (bill <= 300 && bill >= 50) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.20;
//     }
// }

// console.log(calcTip(100))

/*
function calcTip(bill) {
    if (bill <= 300 && bill >= 50) {
        return bill * 0.15
    } else {
        return bill * 0.20
    }
}

const bills = [125, 555, 44]
const tips = bills.map(bill => calcTip(bill));
const total = bills.map((bill, index) => bill + tips[index]);



console.log(bills)

console.log(tips)

console.log(total)


const nishi = {
    name: 'nishita',
    profession: 'student',
    birthyear: 2005,
    course: 'swe',
    friends: ['nishi', 'rishi', 'vijay'],
    calage: function (year) {
        return 2024 - year;
    }

}
console.log(" nishi has " + nishi.friends.length + ' friends and his best friend is ' + nishi.friends[0])

console.log(nishi.calage(nishi.birthyear))





const nishi = {
    name: 'nishita',
    profession: 'student',
    birthyear: 2005,
    course: 'swe',
    friends: ['nishi', 'rishi', 'vijay'],
    calage: function () {
        return 2024 - this.birthyear;
    }

}
console.log(" nishi has " + nishi.friends.length + ' friends and his best friend is ' + nishi.friends[0])

console.log(nishi.calage(nishi.birthyear))

*/


/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }

}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}
mark.calcBMI();
john.calcBMI();

// Compare BMIs and log the result
if (mark.bmi > john.bmi) {
    console.log(`Mark Miller's BMI (${mark.bmi}) is higher than John Smith's BMI (${john.bmi}).`);
} else {
    console.log(`John Smith's BMI (${john.bmi}) is higher than Mark Miller's BMI (${mark.bmi}).`);
}

