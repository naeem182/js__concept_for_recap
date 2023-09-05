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

