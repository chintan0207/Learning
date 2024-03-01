
let person = {
    name: 'john',
  
    age: 25,
  };
  
let person2 = {
    name: 'chintan',
  
    age: 21,
  };
  
  function greet(p) {
    p.name = `Mr ${p.name}`;
  
    return `Welcome ${p.name}`;
  }
  
 console.log(greet(person2));
