// function assigned to variable

let plusTen = (num) =>{
    return num + 10;
}

let f = plusTen;

console.log(plusTen(10))
console.log(f(15))

// callback function 
let sum = (n1,n2) =>{
    return n1+n2;
}
let diff = (n1,n2) => {
    return n1-n2;
}
let result = (fx,num1,num2) =>{
   return fx(num1,num2)
}

console.log(result(sum,10,45));
console.log(result(diff,10,45));


const isEven = (n) => {
    return n % 2 == 0;
  }
  
  let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`${num} is an even number: ${isNumEven}.`)
  }
  
  // Pass in isEven as the callback function
  printMsg(isEven, 4); 
  // => The number 4 is an even number: True.
  

  // map
  const members = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];

  const announcements = members.map((member) => {
    return member + " joined the contest.";
  });

  const n=[1,2,3,4,5];
  
  const res = n.map((i) =>{
    return i+5;
  });

  console.log(n)
  console.log(res)

  console.log(members);
  console.log(announcements);
  
  //reduce
  
  const numbers = [1, 2, 3, 4];

  const sum2 = numbers.reduce((accumulator, curVal) => {  
    return accumulator + curVal;
  });
  
  console.log(sum2); // 10
  
//filter 
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5 && n<40;
});

console.log(filteredArray);
