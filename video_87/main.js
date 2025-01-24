const fs = require('fs')
// const fs = require('fs/promises')
// console.log(fs)


console.log("starting")

// fs.writeFileSync("subha.txt","Subhadip is a good  person")

fs.writeFile("subha2.txt","subhadip all so a good boy",()=>{
    console.log("done")
    fs.readFile("subha2.txt",(error, data)=>{
        console.log(error,data.toString())

    })
})

fs.appendFile("subha.txt","herry robo", (e,d)=>{
    console.log(d)

})

console.log("ending")