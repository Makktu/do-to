export default function headContent() {
    const element = document.createElement("div");

    element.innerHTML = `<h1 style="text-decoration: underline;margin-bottom: 20px;">TO-DO</h1>`;

    return element;
}
