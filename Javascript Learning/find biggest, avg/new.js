const num = [5,8,9,7,1,15];
const result = findbiggest(num)
const average = avg(num) 
const sum = sumEvenNumbers(num)

console.log("The biggest number in array is:" + result)
console.log("The Average of array is:" + average)
console.log("The sum of even number in  array is:" + sum)


// for biggest number in array

function findbiggest(arr) {
    if(arr.length === 0){
        return null;
    }
    let big = arr[0];
    for (let i = 0; i < arr.length; i++) {
         if(arr[i] > big){
            big = arr[i];
         }        
    }

    return big;
    
}

// for average 

function avg(arr) {
    if(arr.length === 0){
        return null;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum/arr.length;
    
}

// for sum

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
