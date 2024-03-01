// input: area_of_triangle(5, 6, 7);

//output: 14.69;

let area_of_triangle = (a,b,c) => {

  const s=((a+b+c)/2);

  const area = Math.sqrt(s*(s - a)*(s - b)*(s - c) );

  return area;
}

let result = area_of_triangle(5, 6, 7);

console.log(result)

//Create a JavaScript Function to capitalize the first letter of each word of a given string.

const capitalize = (str) =>{

    const words = str.split(' ');

    const capword = words.map(word => {
       return word.charAt(0).toUpperCase() + word.slice(1)
    })

    return capword.join(' ')

}

let result2 = capitalize("chintan harshadbhai patel");

console.log(result2)