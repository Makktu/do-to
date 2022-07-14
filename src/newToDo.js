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

function makeNewEntry(toDoList, task, due, priority, category, notes) {
    // *****************************************************
    // **** NEED MODAL LOGIC FOR NEW ENTRY FORM IN HERE ****
    // *****************************************************

    const newEntry = new ToDo(task, due, priority, category, notes);

    toDoList.push(newEntry);
    content.innerHTML = "";
    content.appendChild(createNewToDo(toDoList));
    addListeners();
}
