import fs from 'fs/promises';


let a= await fs.readFile("subha.txt")

let b = await fs.appendFile("subha.txt" ,"\nhe live in Haldia")

console.log(a.toString(),b)
