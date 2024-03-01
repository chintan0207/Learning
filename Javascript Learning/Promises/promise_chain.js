let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolve after 3 second")
        resolve(72)
    },3000)
})

p1.then((value) =>{
    console.log(value)
    let p2 = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("promise 2")
        },5000)
    })
    return p2
}).then((value) => {
    console.log("we are done")
    return 2
}).then((value) =>{
    console.log(value)
})
