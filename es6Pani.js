// arrow function
//1 parameter
const getFiftyfive = () => 55;
const addfive = x => x + 5;
const isEven = x => x % 2 == 0;
const even = isEven(9);
console.log(even)
//multyparameter
const addthreenum = (x, y, z) => x = y = z;
//multyline arrow
const calculate = (x, y) => {
    const add = x + y;
    console.log(add)
    const sub = x - y;
    console.log(sub)
    const mul = x * y;
    console.log(mul)
    const div = x / y;
    console.log(div)
}
calculate(12, 3);
/////