export default function createNewToDo(toDoList, currentCategory) {
    let html = "";
    for (let g = 0; g < toDoList.length; g++) {
        if (currentCategory !== "ALL") {
            if (toDoList[g].group !== currentCategory) {
                continue;
            }
        }
        html += `<div class='task-card'><div><div class=${toDoList[g].group}>${
            toDoList[g].group
        }</div></div><div id='task${g}'>💥 ${toDoList[g].task}</div><div>Due: ${
            toDoList[g].date == "today" ? "‼️" : ""
        }${toDoList[g].date}</div><div>Priority: ${
            toDoList[g].priority == 1
                ? "High"
                : toDoList[g].priority < 4
                ? "Medium"
                : "Low"
        }<br></div><div>${toDoList[g].notes ? "Note: " : ""}${
            toDoList[g].notes
        }</div><br><button class='btns editBtn' id='btn${g}'>EDIT</button><button class='btns doneBtn' id='done${g}'>DONE!</button></div>`;
    }
    const element = document.createElement("div");
    element.className = "display";

    element.innerHTML = html;

    return element;
}
