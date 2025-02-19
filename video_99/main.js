const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Employee = require("./models/employee");

mongoose.connect("mongodb://127.0.0.1:27017/company");
const port = 3000;

app.set("view engine", "ejs");

const getRandom= (arr)=>{
    let rno =Math.floor(Math.random()*(arr.length-1))
    return arr[rno];
}

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/generate", async(req, res) => {

    //Clear the Collection Employee
    await Employee.deleteMany({})
    //Generate random data

    let randomName=["Rohan", "Rahul", "Raj", "Ramesh", "Rajesh", "Rajat", "Rohit","Susmita"];

    let randomLanguage=["Python", "java", "C++", "C", "Ruby", "Perl", "Go", "Rust", "Scala", "Kotlin"];

    let randomCity=["Kolkata","Delhi","Mumbai","Chennai","Bangalore"];

    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomName),
            salary:Math.floor( Math.random()*20000),
            language:getRandom(randomLanguage),
            city: getRandom(randomCity),
            isManager: (Math.random()>0.5)?true:false
        });
        console.log(e);
        // await e.save()
    }

    res.render("index");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
