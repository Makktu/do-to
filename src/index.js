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
        group: "Routine",
        notes: "",
    },
    {
        task: "pay gas bill",
        date: "tomorrow",
        priority: "1",
        group: "Finances",
        notes: "if website down again, phone them up",
    },
    {
        task: "finish book",
        date: "open",
        priority: "5",
        group: "Personal",
        notes: "check Amazon for next volume",
    },
];

export default function theList() {
    return toDoList;
}

class ToDo {
    constructor(task, date, priority, group, notes) {
        this.task = task;
        this.date = date;
        this.priority = priority;
        this.group = group;
        this.notes = notes;
    }
}

const newTodo = new ToDo(
    "check travel info",
    "today",
    "1",
    "Personal",
    "go edve"
);

console.log(newTodo);

toDoList.push(newTodo);

content.appendChild(createNewToDo());
