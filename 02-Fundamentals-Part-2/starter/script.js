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

const person = {
    name: 'Alice',
    greet: function () {
        console.log(this.name);
    }
};
person.greet(); // Alice
