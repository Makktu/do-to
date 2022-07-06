import "./style.scss";
import createNewToDo from "./renderDisplay.js";
import { ClassBody } from "requirejs";

console.log("✅ Running");

const headSection = document.getElementById("header");
const content = document.getElementById("content");

let toDoList = [
    {
        task: "Get bread",
        date: "today",
        priority: "2",
    },
    {
        task: "pay gas bill",
        date: "tomorrow",
        priority: "1",
    },
    {
        task: "finish book",
        date: "open",
        priority: "5",
    },
];

export default function theList() {
    return toDoList;
}

class ToDo {
    constructor(task, date, priority) {
        this.task = task;
        this.date = date;
        this.priority = priority;
    }
}

const newTodo = new ToDo("check travel info", "today", "1");

console.log(newTodo);

toDoList.push(newTodo);

content.appendChild(createNewToDo());
