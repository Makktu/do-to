import { addListeners } from "./addListeners.js";
import createNewToDo from "./renderDisplay.js";
import { entryId } from "./addListeners.js";
import { currentCategory } from "./index.js";
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

function makeNewEntry(
    toDoList,
    task,
    due,
    priority,
    category,
    notes,
    editFlag,
    entryId
) {
    const newEntry = new ToDo(task, due, priority, category, notes);
    console.log(newEntry);

    if (entryId) {
        toDoList[entryId].task = newEntry.task;
        toDoList[entryId].date = newEntry.date;
        toDoList[entryId].priority = newEntry.priority;
        console.log(newEntry.category);
        toDoList[entryId].group = newEntry.group;
        toDoList[entryId].notes = newEntry.notes;
    } else {
        toDoList.push(newEntry);
    }
    content.innerHTML = "";
    content.appendChild(
        createNewToDo(toDoList, document.getElementById("categories").value)
    );
    addListeners();
}
