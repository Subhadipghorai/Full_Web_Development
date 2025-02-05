// CRUD Operations

//Create
use("CrudDb")
console.log(db)

db.createCollection("courses")

//Insert One
// db.courses.insertOne({
//     name:"Harry web dev free course",
//     price:0,
//     assignment:12,
//     project:35

// })

//Insert Many

// db.courses.insertMany(
//     [
//         {
//             "name": "Harry Web Dev Free Course",
//             "price": 0,
//             "assignment": 12,
//             "project": 35
//         },
//         {
//             "name": "Complete JavaScript Bootcamp",
//             "price": 49,
//             "assignment": 20,
//             "project": 50
//         },
//         {
//             "name": "ReactJS Beginner to Pro",
//             "price": 99,
//             "assignment": 15,
//             "project": 40
//         },
//         {
//             "name": "Full Stack Developer Guide",
//             "price": 0,
//             "assignment": 25,
//             "project": 60
//         },
//         {
//             "name": "CSS Mastery Course",
//             "price": 29,
//             "assignment": 10,
//             "project": 20
//         },
//         {
//             "name": "Python for Web Development",
//             "price": 79,
//             "assignment": 18,
//             "project": 30
//         },
//         {
//             "name": "Node.js and Express Crash Course",
//             "price": 59,
//             "assignment": 22,
//             "project": 45
//         },
//         {
//             "name": "HTML & CSS for Beginners",
//             "price": 0,
//             "assignment": 8,
//             "project": 15
//         },
//         {
//             "name": "Django Web Development Course",
//             "price": 89,
//             "assignment": 14,
//             "project": 38
//         },
//         {
//             "name": "Next.js for Modern Web Apps",
//             "price": 109,
//             "assignment": 17,
//             "project": 42
//         }
//     ]    
// )

//READ

// let a= db.courses.find({price:0})
// console.log(a.toArray())

// let b= db.courses.findOne({price:0})
// console.log(b)

//UPDATE

// db.courses.updateOne({price:0},{$set:{price:100}})

// db.courses.updateMany({price:100},{$set:{price:1000}})


// DELETE 

db.courses.deleteMany({price:1000})

