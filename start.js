//how to declare a varriable using let and const


// let: Allows you to create variables যেটা একবার declare করার পর আপনি যতবার ইচ্ছে change করতে পারবেন, তবে অবশ্যই block scope এর মধ্যে।
// const: Creates variables যেটা একবার dcelare করার পর এর value আর কখনো chang করতে পারবেন না।

const fatherfirstname = 'shaid';//not change
const fatherlastname = 'mia';//not change
let season = 'rainy';//changeable
season = 'winter';

//// basic codition: >,<,===,!==,<=,>=
//multiple condition: &&, ||

if (fatherfirstname === "shaid" && fatherlastname === "mia") {

    console.log("your father")

}

else {

    console.log('not your father')
}
//and operation
if (fatherfirstname === "shaid" || fatherlastname === "mia") {

    console.log("not your father")

}

else {

    console.log(' your father')
}

//Array declare
//index
//length
//push
const num = [2, 4, 4, 555, 5545, 5, 5];
console.log(num)
const numlength = num.length
console.log(numlength)
num.push(2, 4)
console.log(num)
console.log(num.length)

//loop
for (let i = 0; i < num.length; i++) {
    const number = num[i];
    console.log(number);
}



