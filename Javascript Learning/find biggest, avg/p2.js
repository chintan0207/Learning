const person2 = {
    firstname:"chintan",
    lastname:"Patel",
    fname:"Harshadbhai",
    fullname: function(){
        return this.firstname +" "+ this.fname +" "+this.lastname;
    }
    
};
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
let Person3 = new Person("chintan",20)
console.log(Person3.greet())
const result = person2.fullname();
const result2=Date();
console.log(result);
console.log(result2)