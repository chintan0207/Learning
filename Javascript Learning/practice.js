null ?? 'I win';           //  'I win'
undefined ?? 'Me too';     //  'Me too'

false ?? 'I lose'          //  false
0 ?? 'I lose again'        //  0
'' ?? 'Damn it'            //  ''
console.log(null ?? 'I win');
console.log(false ?? 'I lose');
console.log(true ?? 'I lose');

var a =0;
let b;
if (a===b) {
  console.log('Mail sent to recipient');
}


const size = 20;


if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// Print: Small


const num = 1;

switch(num){
    case 1: 
    console.log("sunday");
    break;
    case 2: 
    console.log("monday");
    break;
    default:
    console.log("Invalid choice");    
}

const food = 'salad';

switch (food) {
  case 'oyster':
    console.log('The taste of the sea');
    break;
  case 'pizza':
    console.log('A delicious pie');
    break;
  default:
    console.log('Enjoy your meal');
}


//fuctions
 
function sum(n1,n2){
    return n1+n2;
}
console.log(sum(8,7));


const result = function(){
     return "Anonymous function";
}
console.log(result())
// arrow function

const str = () =>{
    console.log("Inside arrow function");
    return "the arrow function String";
}
console.log(str());

const multiply = (a,b) => a*b;
console.log(multiply(5,8));

const name = name => {
    console.log(`hello ${name}`)
}

name("Rahul")

var pizzaName = "Margrita";

function myFunction(){
    console.log(pizzaName);

}
myFunction();


const isLoggedIn = true;
if (isLoggedIn==true) {
  var statusMessage = 'Logged in.';
}
// Uncaught ReferenceError...
console.log(statusMessage);


// Prints 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
    setTimeout(_ => console.log(i), 10);
  }

// Prints 0, 1 and 2, as expected.
for (let j = 0; j < 3; j++) { 
    setTimeout(_=> console.log(j), 10);
  }
    
  