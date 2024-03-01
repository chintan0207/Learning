let p1 = new Promise((resolve,reject) => {

    console.log("Promise is pending in p1")
    setTimeout(() =>{
        
        resolve(true)
    
    },5000)

})

let p2 = new Promise((resolve,reject) => {
    console.log("Promise is pending in p2")
    setTimeout(() =>{
        reject(new Error("i am an error"))
    },3000)

})
p1.then((value) => {
    console.log(value)
})

p2.then((error) =>{
    console.log("some error occured in p2")
},(value) => {
    console.log(value)
})

