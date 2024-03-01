async function chintan(){

    let ghejWeather = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("27 deg")
        },5000);
    })

    let chikhliWeather = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("30 deg")
        },3000);
    })

   // ghejWeather.then(alert)
    //chikhliWeather.then(alert)
    console.log("fetching the weather please wait..")
    let ghejW = await ghejWeather
    console.log("fetched the weather is",ghejW)

    console.log("fetching the weather please wait..")
    let chikhliW = await chikhliWeather
    console.log("fetched the weather is",chikhliW)


    return [ghejW,chikhliW]

}

const print = () =>{
    console.log("hey welcome")

}
console.log("welcome to weather control room");
let a = chintan();
let b = print();
console.log(a)
console.log(b)