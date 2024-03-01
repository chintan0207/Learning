function sum(a,b){
    return a+b;
}
function diff(a,b){
    return a-b;
}

function calc(fx,a,b){
    return fx(a,b)
}

console.log(calc(sum,5,8))
console.log(calc(diff,89,9))