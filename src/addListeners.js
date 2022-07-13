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

    // addNewEntry.addEventListener("click", () => {
    //     console.log("Add New Clicked");
    //     // makeNewEntry(toDoList);
    //     // newToDo(toDoList);
    // });

    const settingsBtn = document.querySelector(".fa-gears");

    settingsBtn.addEventListener("click", () => {
        console.log("Settings Clicked");
    });

    const modal = document.querySelector("#modal");
    // const openModal = document.querySelector(".open-button");
    const closeModal = document.querySelector(".close-button");

    closeModal.addEventListener("click", () => {
        modal.close();
    });
}
