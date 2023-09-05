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
    console.log("for loop num", number);
}
//simple function
function multiply(n1, n2) {
    const mul = n1 * n2
    return mul;
}
const mulout = multiply(2, 8)
console.log("multiply output", mulout)

//object
//acces property byname
const movie = {
    name: 'bangla movie',
    // age=23;
    movies: ['king khan', 'buker opor pahar']

}
console.log(movie.name);//direct by prooperty
console.log(movie['name']);//access via  prooperty name string

console.log(movie.movies);
//for in
for (const key in movie) {
    console.log("for in in obj", key, movie[key])
}

for (let i of num) {
    const arrykey = i;
    console.log('for of in array', arrykey)

}
//object keys and values
const moviekey = Object.keys(movie)
const movievalues = Object.values(movie)
console.log(moviekey, movievalues)
//templete string
const tempstring = `ki kahini ${movie.name} movier nam gula halo ${movie.movies}`
console.log(tempstring)