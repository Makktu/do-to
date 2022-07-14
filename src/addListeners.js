import { toDoList, content } from "./index.js";
import { makeNewEntry } from "./newToDo.js";

import createNewToDo from "./renderDisplay.js";

export { addControlButtons, addListeners };

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

function addControlButtons() {
    const addNewEntry = document.querySelector(".fa-plus");

    addNewEntry.addEventListener("click", () => {
        modal.showModal();
    });

    // ****************************
    // *** NEW TASK SAVE BUTTON ***
    // ****************************

    const newTaskSaveBtn = document.querySelector(".submitBtn");

    newTaskSaveBtn.addEventListener("click", (e) => {
        // stop form closing until minimum 1 field entered
        e.preventDefault();

        let newGroup = document.getElementById("group").value;
        let newTask = document.getElementById("new-task").value;
        let newDue = document.getElementById("due-by").value;
        let newPriority = document.getElementById("priority").value;
        let newNotes = document.getElementById("notes").value;

        if (!newTask) {
            alert("There must be an entry in the TASK section!");
            return;
        }

        modal.close();

        makeNewEntry(
            toDoList,
            newTask,
            newDue,
            newPriority,
            newGroup,
            newNotes
        );
    });

    // *****************************

    const settingsBtn = document.querySelector(".fa-gears");

    settingsBtn.addEventListener("click", () => {
        console.log("Settings Clicked");
    });

    const modal = document.querySelector("#modal");
    const closeModal = document.querySelector(".close-button");
    closeModal.addEventListener("click", () => {
        modal.close();
    });
}
