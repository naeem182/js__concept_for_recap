//json.......JSON.stringify()+JSON.parse()
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
//////////////
//fetch
// fetch('url')
//     .then(res => res.JSON)
//     .then(data => console.log(data))
// /////
// // fetch('https://jsonplaceholder.typicode.com/todos/1')
// //     .then(response => console.log(response))// .json is not similar but close to json.parse
// //     // .then(json => console.log(json))


/////////////////////////
// const url = 'https://jsonplaceholder.typicode.com/todos/1'

// // fetch(url)
// //     .then(response => response.json())
// //     .then(json => console.log(json))

/////////////
// function loadData() {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
// }
///////////////////
// const loadcategory = async () => {

//     const res = await fetch('https://openapi.programming-hero.com/api/news/categories');

//     const data = await res.json()
//     const tab_Container = document.getElementById('tab_Container');
//     data.data.news_category.slice(0, 3).forEach((categories) => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//         <a class="tab" onclick="handleLoadNews('${categories.category_id}')">Tab ${categories.category_name}</a>
//         `
//         tab_Container.appendChild(div)


//     });