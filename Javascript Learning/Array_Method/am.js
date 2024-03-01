const arr = [4,5,8,9,45];
let sum = 0;
arr.forEach((item,index,arr) => {
    // console.log(item)
    // console.log(index)
    // console.log(arr)
    console.log("arr[" + index +"] = " + item);
});

const fruits = ["apple","banana","oranage"];

// console.log(fruits[0]);

// fruits.push(true)
// fruits.push(20)
// fruits.push("Grapes",50,78)
// console.log(fruits)
// fruits.pop()
// console.log(fruits)

// fruits.shift()
// console.log(fruits);
// fruits.unshift("Watermelon")
// console.log(fruits);

let numAr = [1,2,3,4];

// let revAr = [];

// for(let i= numAr.length - 1;i>=0;i--){
//     revAr.push(numAr[i]);
// }
// console.log(revAr);

console.log(numAr.slice().reverse());



const moives =["War","RaOne","Dil"];

// moives.shift("Bahubali");
moives.unshift("Bahubali");

for(let m of moives){
    console.log(m);
}

for(let ind in moives){
    console.log(ind);
}

for (let i = 0; i < 2; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      console.log(`${i}-${j}`);
    }
  }
  
