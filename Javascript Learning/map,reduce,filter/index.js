const num = [1, 2, 4, 5, 6, 8];
const tw = num.map(item => item * 2);
console.log(tw);

const newarray = num.filter(item => item % 2 === 0)
console.log(newarray);

const new2 = num.reduce(function (result, item) {
    return result + item
},0);

console.log(new2);



