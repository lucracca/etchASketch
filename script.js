const container = document.getElementById("container");

function generate() {
    container.innerHTML = ""; //a quick way to clear the past generated divs
    const cols = parseInt(document.getElementById("colsTa").value);
    const rows = parseInt(document.getElementById("rowsTa").value);

    for (i = 0; i < cols; i++) {
        for (j = 0; j < rows; j++) {
            const div = document.createElement("div");
            div.style.width = "25px";
            div.style.height = "25px";
            div.style.background = "blue";
            div.addEventListener("mouseover", (e) => {
                div.style.background = "red";
            })
            container.appendChild(div);

        }
        jump = document.createElement("br");
        container.appendChild(jump);
    }
}


generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", (e) => {
    generate();
})