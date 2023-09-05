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
//spread operator
const num = [1, 2, 3, 4, 5, 5, 6,]
let num1 = num//evabe copy kra righyt na
console.log(num1)
num.push(111, 122)
console.log(num1)//update hye gese
const num2 = [...num]
console.log(num2)
num.push(33, 44);
console.log(num2)//ager copy ty pisi..update hay nai


