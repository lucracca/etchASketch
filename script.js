const container = document.getElementById("container");

function generate() {
    container.innerHTML = ""; //a quick way to clear the past generated divs
    const size = parseInt(document.getElementById("sizeTa").value);

    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.style.width = (900 / size) * .98 + "px";
            div.style.height = (900 / size) * .98 + "px";
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