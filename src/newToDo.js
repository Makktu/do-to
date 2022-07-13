import { addListeners } from "./addListeners.js";
import createNewToDo from "./renderDisplay.js";

export { ToDo, makeNewEntry };

class ToDo {
    constructor(task, date, priority, group, notes) {
        this.task = task;
        this.date = date;
        this.priority = priority;
        this.group = group;
        this.notes = notes;
    }
}

function makeNewEntry(toDoList) {
    // *****************************************************
    // **** NEED MODAL LOGIC FOR NEW ENTRY FORM IN HERE ****
    // *****************************************************

    let category = prompt("Category");
    let task = prompt("Task?");
    let due = prompt("Due?");
    let priority = prompt("Priority?");
    let notes = prompt("Notes?");

    const newEntry = new ToDo(task, due, priority, category, notes);

    toDoList.push(newEntry);
    content.innerHTML = "";
    content.appendChild(createNewToDo(toDoList));
    addListeners();
}
