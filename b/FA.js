const defaults = {
    titleColor: "#ff9d2f",
    bg1: "#ff8c00",
    bg2: "#ff5500",
    buttonColor: "#ff7b1f",
    buttonTextColor: "#ffffff"
};

let settings = JSON.parse(localStorage.getItem("blogSettings")) || defaults;

function applySettings() {
    document.documentElement.style.setProperty(
        "--title-color",
        settings.titleColor
    );

    document.documentElement.style.setProperty(
        "--bg1",
        settings.bg1
    );

    document.documentElement.style.setProperty(
        "--bg2",
        settings.bg2
    );

    document.documentElement.style.setProperty(
        "--button-color",
        settings.buttonColor
    );

    document.documentElement.style.setProperty(
        "--button-text-color",
        settings.buttonTextColor
    );

    titleColor.value = settings.titleColor;
    bg1.value = settings.bg1;
    bg2.value = settings.bg2;
    buttonColor.value = settings.buttonColor;
    buttonTextColor.value = settings.buttonTextColor;
}

function saveSettings() {
    localStorage.setItem(
        "blogSettings",
        JSON.stringify(settings)
    );
}

applySettings();

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
    menu.classList.toggle("show");
};

titleColor.oninput = e => {
    settings.titleColor = e.target.value;
    applySettings();
    saveSettings();
};

bg1.oninput = e => {
    settings.bg1 = e.target.value;
    applySettings();
    saveSettings();
};

bg2.oninput = e => {
    settings.bg2 = e.target.value;
    applySettings();
    saveSettings();
};

buttonColor.oninput = e => {
    settings.buttonColor = e.target.value;
    applySettings();
    saveSettings();
};

buttonTextColor.oninput = e => {
    settings.buttonTextColor = e.target.value;
    applySettings();
    saveSettings();
};

window.addEventListener("click", e => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove("show");
    }
});