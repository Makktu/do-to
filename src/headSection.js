import { currentCategory } from ".";

export default function headContent() {
    const element = document.createElement("div");

    element.innerHTML = `<h1 style="text-decoration: underline;margin-bottom: 10px;">TO-DO!</h1><div class="task-cats" style="margin-bottom: 50px;">
    Displaying Tasks From:

    <select name="task-categories" id="categories">
        <option value="ALL">ALL</option>
        <option value="Routine">Routine</option>
        <option value="Finances">Finances</option>
        <option value="Personal">Personal</option>
    </select>
</div>`;

    return element;
}
