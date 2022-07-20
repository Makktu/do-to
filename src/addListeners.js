import { toDoList, content, currentCategory } from "./index.js";
import { makeNewEntry } from "./newToDo.js";

import createNewToDo from "./renderDisplay.js";

export { addControlButtons, addListeners };

export { entryId };

let editFlag = false;

let entryId;

function editEntry(entryId) {
    console.log(entryId);

    modal.showModal();
    document.getElementById("entry-mode").innerText = "EDIT TO-DO";
    document.getElementById("new-task").value = toDoList[entryId].task;
    document.getElementById("group").value = toDoList[entryId].group;
    document.getElementById("due-by").value = toDoList[entryId].newDue;
    document.getElementById("priority").value = toDoList[entryId].priority;
    document.getElementById("notes").value = toDoList[entryId].notes;
    editFlag = true;
}

function addListeners() {
    const allEditBtns = document.querySelectorAll(".editBtn");

    allEditBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            entryId = e.target.id.slice(3);
            editEntry(entryId);
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
        if (document.getElementById("entry-mode").innerText == "EDIT TO-DO")
            document.getElementById("entry-mode").innerText =
                "Create New To-Do";
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

        document.getElementById("new-task").value = "";
        document.getElementById("notes").value = "";

        modal.close();

        makeNewEntry(
            toDoList,
            newTask,
            newDue,
            newPriority,
            newGroup,
            newNotes,
            editFlag ? editFlag : null,
            editFlag ? entryId : null
        );

        if (editFlag) editFlag = false;
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

    const categoriesList = document.getElementById("categories");

    console.log(categoriesList.value);

    categoriesList.addEventListener("change", () => {
        // currentCategory = categoriesList.value;
        console.log(categoriesList.value);
        content.innerHTML = "";
        content.appendChild(createNewToDo(toDoList, categoriesList.value));
    });
}
