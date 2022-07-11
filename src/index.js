import "./style.scss";
import createNewToDo from "./renderDisplay.js";
import headContent from "./headSection.js";
// import { theList, ToDo } from "./newToDo";

function makeNewEntry(toDoList) {
    let category = prompt("Category");
    let task = prompt("Task?");
    let due = prompt("Due?");
    let priority = prompt("Priority?");
    let notes = prompt("Notes?");

    const newEntry = new ToDo(task, due, priority, category, notes);

    toDoList.push(newEntry);
    content.innerHTML = "";
    content.appendChild(createNewToDo(toDoList));
}

console.log("✅ Running", new Date().toString().slice(0, 25));

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

console.log("💥", toDoList);

headSection.appendChild(headContent());
content.appendChild(createNewToDo(toDoList));

// ! add event listeners to the list buttons

function addListeners() {
    const allEditBtns = document.querySelectorAll(".editBtn");

    allEditBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            console.log(e.target.id);
        });
    });

    const allDoneBtns = document.querySelectorAll(".doneBtn");

    allDoneBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            toDoList.splice(e.target.id.slice(4), 1);
            content.innerHTML = "";
            content.appendChild(createNewToDo(toDoList));
            addListeners();
        });
    });
}

// ! begin logic here – worry about modularising it all later

let listCategories = ["Routine", "Finances", "Personal"];

const addNewEntry = document.querySelector(".fa-plus");
addNewEntry.addEventListener("click", () => {
    console.log("Clicked");
    makeNewEntry(toDoList);
});
const settingsBtn = document.querySelector(".fa-gears");

settingsBtn.addEventListener("click", () => {
    console.log("Clicked");
});

addListeners();
