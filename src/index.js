import "./style.scss";
import createNewToDo from "./renderDisplay.js";
import headContent from "./headSection.js";
import { addListeners, addControlButtons } from "./addListeners.js";

export let currentCategory = "ALL";
export let toDoList = [
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

console.log("✅ Running", new Date().toString().slice(0, 25));

const headSection = document.getElementById("header");
export const content = document.getElementById("content");

headSection.appendChild(headContent());
content.appendChild(createNewToDo(toDoList, currentCategory));
addListeners();
addControlButtons();
