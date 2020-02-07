//sorry for the excessive creation of DOM through JS, just practicing

const container = document.getElementById("container");
const menu = document.getElementById("menu");
const customRb = document.getElementById("customRb");
const randomRb = document.getElementById("randomRb");

breakline = document.createElement("br");
const customBgTa = document.createElement("textarea");
const customBrushTa = document.createElement("textarea");
const customBgLbl = document.createElement("label");
const customBrushLbl = document.createElement("label");
const sizeLbl = document.createElement("label");
const sizeTa = document.createElement("textarea");
const generateBtn = document.createElement("button");
const gridLbl = document.createElement("label");
const gridCbox = document.createElement("INPUT");
gridCbox.setAttribute("type", "checkbox");
gridCbox.setAttribute("checked", "true");

customBgTa.id = "customBgTa";
customBrushTa.id = "customBrushTa";
customBgLbl.id = "customBgLbl";
customBrushLbl.id = "customBgLbl";
customBgLbl.innerText = "background";
customBrushLbl.innerText = "brush";
customBgTa.innerText = "0,0,255";
customBrushTa.innerText = "255,0,0";


sizeLbl.innerText = "Size";
sizeLbl.id = "sizeLbl";
sizeTa.id = "sizeTa";
sizeTa.innerText = "40";
gridLbl.id = "gridLbl";
gridLbl.innerText = "Grid";
gridCbox.id = "gridCbox";


generateBtn.id = "generateBtn";
generateBtn.innerText = "Generate";




menu.appendChild(document.createElement("br"));
menu.appendChild(customBgLbl);
menu.appendChild(customBgTa);
menu.appendChild(document.createElement("br"));
menu.appendChild(customBrushLbl);
menu.appendChild(customBrushTa);
menu.appendChild(generateBtn);
menu.appendChild(sizeLbl);
menu.appendChild(sizeTa);
menu.appendChild(document.createElement("br"));
menu.appendChild(gridLbl);
menu.appendChild(gridCbox);

function getBrushColor() {
    if (customRb.checked) {
        if (customBrushTa.value == "random") { //easter egg that allows user to input "random"
            return generateRandomRgb();
        } else {
            return fixRgbFormat(customBrushTa.value);
        }
    } else if (randomRb.checked) {
        return generateRandomRgb();
    } else {
        return "black";
    }
}


function generate() {
    container.innerHTML = "";

    const size = parseInt(sizeTa.value);
    const bgColor = customRb.checked ? fixRgbFormat(customBgTa.value) : "white";

    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.style.width = (900 / size) + "px";
            cell.style.height = (900 / size) + "px";

            cell.style.background = bgColor == "random" ? generateRandomRgb() : bgColor;
            cell.style.border = gridCbox.checked ? "solid 0.1px" : "0";

            cell.addEventListener("mouseover", (e) => {
                if (cell.style.background == bgColor) {
                    cell.style.background = getBrushColor();
                } else {
                    cell.style.background = darkenRgb(cell.style.background.toString());
                }
            });

            container.appendChild(cell);

        }

        container.appendChild(breakline);
    }

}



generateBtn.addEventListener("click", (e) => {
    generate();
})

function generateRandomRgb() {
    var r = Math.random;
    var o = Math.round;
    var max = 255;
    return "rgb(" + o(r() * max) + "," + o(r() * max) + "," + o(r() * max) + ")";
}

function darkenRgb(rgb) {
    darkened = rgb.substr(4, rgb.length - 2).split(",");
    darkened[0] = Math.round(parseFloat(darkened[0]) * .9);
    darkened[1] = Math.round(parseFloat(darkened[1]) * .9);
    darkened[2] = Math.round(parseFloat(darkened[2]) * .9);
    return "rgb(" + darkened[0] + ", " + darkened[1] + ", " + darkened[2] + ")";
}

function fixRgbFormat(rgb) {
    if (isInt(rgb[0])) {
        splitter = rgb.split(",");
        return "rgb(" + splitter[0] + ", " + splitter[1] + ", " + splitter[2] + ")";
    } else return rgb;

}

function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}