const product = [
    { name: 'laptop', price: 1213, brand: "lenevo", color: 'red' },
    { name: 'laptop', price: 5000, brand: "hp", color: 'blue' },
    { name: 'laptop', price: 5022, brand: "asus", color: 'xed' },
    { name: 'laptop', price: 2134, brand: "lenevo", color: 'black' },
    { name: 'laptop', price: 1366, brand: "lenevo", color: 'red' },
]
//map-----array banay dey
const brand = product.map(product => product.brand)
console.log(brand)
//price map
const price = product.map(product => product.price)
console.log(price)

////////////////////////////
//for each..array dey na....single line
product.forEach(product => console.log('band name by forEach', product.brand))
product.forEach(product => console.log('color name by forEach', product.color))
//multyline forEach
product.forEach(p => {
    console.log('band name by forEach multyline', p.brand)
})