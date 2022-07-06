import theList from "./index.js";

export default function createNewToDo() {
    let toDoList = theList();
    console.log(toDoList);
    let html = "";
    for (let g = 0; g < toDoList.length; g++) {
        html += `<br><div class='task-card'><div id='task${g}'>💥 ${
            toDoList[g].task
        }</div><div>Due: ${toDoList[g].date}</div><div>Priority: ${
            toDoList[g].priority == 1
                ? "High"
                : toDoList[g].priority < 4
                ? "Medium"
                : "Low"
        }</div><button class='editBtn' id='btn${g}'>EDIT</button><button class='doneBtn' id='done${g}'>DONE!</button></div><br>`;
    }
    const element = document.createElement("div");
    element.innerHTML = html;

    return element;
}
