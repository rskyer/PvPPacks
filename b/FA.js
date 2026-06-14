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

function updateMediaBorders() {
    const titleColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--title-color').trim();
    
    const images = document.querySelectorAll('.blog-image');
    const videos = document.querySelectorAll('.blog-video');
    
    images.forEach(img => {
        img.style.boxShadow = `0 0 0 3px ${titleColor}, 0 10px 30px rgba(0,0,0,0.3)`;
        img.addEventListener('mouseenter', function() {
            this.style.boxShadow = `0 0 0 5px ${titleColor}, 0 15px 35px rgba(0,0,0,0.4)`;
        });
        img.addEventListener('mouseleave', function() {
            this.style.boxShadow = `0 0 0 3px ${titleColor}, 0 10px 30px rgba(0,0,0,0.3)`;
        });
    });
    
    videos.forEach(video => {
        video.style.boxShadow = `0 0 0 3px ${titleColor}, 0 10px 30px rgba(0,0,0,0.3)`;
        video.addEventListener('mouseenter', function() {
            this.style.boxShadow = `0 0 0 5px ${titleColor}, 0 15px 35px rgba(0,0,0,0.4)`;
        });
        video.addEventListener('mouseleave', function() {
            this.style.boxShadow = `0 0 0 3px ${titleColor}, 0 10px 30px rgba(0,0,0,0.3)`;
        });
    });
}


const originalApplySettings = applySettings;
applySettings = function() {
    originalApplySettings();
    updateMediaBorders();
};

updateMediaBorders();
// آپدیت رنگ دور عکس و ویدیو با رنگ تایتل
function updateMediaBorders() {
    const titleColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--title-color').trim();
    
    // آپدیت عکس‌ها
    const imageWrappers = document.querySelectorAll('.blog-image-wrapper');
    imageWrappers.forEach(wrapper => {
        wrapper.style.boxShadow = `0 0 0 3px ${titleColor}`;
        wrapper.addEventListener('mouseenter', function() {
            this.style.boxShadow = `0 0 0 5px ${titleColor}`;
        });
        wrapper.addEventListener('mouseleave', function() {
            this.style.boxShadow = `0 0 0 3px ${titleColor}`;
        });
    });
    
    // آپدیت ویدیوها
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    videoWrappers.forEach(wrapper => {
        wrapper.style.boxShadow = `0 0 0 3px ${titleColor}`;
        wrapper.addEventListener('mouseenter', function() {
            this.style.boxShadow = `0 0 0 5px ${titleColor}`;
        });
        wrapper.addEventListener('mouseleave', function() {
            this.style.boxShadow = `0 0 0 3px ${titleColor}`;
        });
    });
}

// ترکیب با تابع applySettings قبلی
const originalApplySettings = window.applySettings || function() {};
window.applySettings = function() {
    if (originalApplySettings) originalApplySettings();
    updateMediaBorders();
};

// فراخوانی اولیه
if (typeof updateMediaBorders === 'function') {
    updateMediaBorders();
}