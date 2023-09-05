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
