// 1. array destructuring
const numbers = [42, 65, 69];
//1
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y)
//2
// const [x, y] = [42, 46];
// console.log(x, y)
//3
const [, y] = numbers;
console.log(y)

/////////
//by function  
function boxing(n1, n2) {
    const nums = [n1, n2]

    return nums;
}
console.log(boxing(123, 145))
const [one, two] = boxing(858, 3494);
console.log(one, two)
//////////////
//obj destructuring
const movie = {
    name: 'bangla movie',
    // age=23;
    movies: ['king khan', 'buker opor pahar']

}
//array
const [firstmovie, secoundmovie] = movie.movies
console.log(`1st movie: ${firstmovie}\n 2nd movie: ${secoundmovie}`)
//object
const { movies, name } = {
    name: 'bangla movie',
    // age=23;
    movies: ['king khan', 'buker opor pahar']

}
console.log(name, movies)

//obj destructuring
const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}
const { machine, ide } = employee
console.log(ide, machine)
