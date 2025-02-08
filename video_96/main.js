import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

mongoose.connect("mongodb://127.0.0.1:27017/todo");



const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const todo = new Todo({
    title: "Hey First Todo",
    desc: "Description of the todo",
    isDone: false,days:Math.floor(Math.random()*45+5*Math.random())
  });
  todo.save();
  res.send("Hello World!");
});

app.get("/a",(req, res) => {
  let todo =  Todo.findOne({})
  console.log(todo)
  res.json({title: todo.title, desc: todo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
