//json
const movie = {
    name: 'bangla movie',
    age: 23,
    movies: ['king khan', 'buker opor pahar']

}
const moviejson = JSON.stringify(movie)//object to string
console.log(movie);

console.log(moviejson);//string hye gese

const movieobj = JSON.parse(moviejson)//obj banay dibe string theke
console.log(movieobj)
