// r.js - نمایش کاربر و هدایت هوشمند - نسخه ساده و مطمئن
document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("pp-user-mini");
    if (!box) return;
    
    // 1. نمایش کاربر
    updateUserBox(box);
    
    // 2. تنظیم کلیک
    box.onclick = function(e) {
        e.preventDefault();
        
        // بررسی اینکه کاربر لاگین کرده یا نه
        const user = JSON.parse(localStorage.getItem("pp-user") || "null");
        
        if (user && user.name) {
            // کاربر لاگین کرده → صفحه خدمات
            window.location.href = "https://rskyer.github.io/PvPPacks/service/start.html";
        } else {
            // کاربر مهمان → صفحه لاگین
            window.location.href = "https://rskyer.github.io/PvPPacks/login.html";
        }
    };
});


function updateUserBox(box) {
    const user = JSON.parse(localStorage.getItem("pp-user") || "null");
    
    if (user && user.name) {
       
        box.innerHTML = `
            <div class="icon">👤</div>
            <div class="name">${user.name}</div>
        `;
        box.title = "${user.name} - کلیک برای خدمات";
    } else {
       
        box.innerHTML = `
            <div class="icon">👤</div>
            <div class="name">ورود</div>
        `;
        box.title = "کلیک برای ورود";
    }
}


function refreshUserDisplay() {
    const box = document.getElementById("pp-user-mini");
    if (box) updateUserBox(box);
}


function checkLogin() {
    const user = JSON.parse(localStorage.getItem("pp-user") || "null");
    return !!(user && user.name);
}

// اضافه کردن به window برای دسترسی از جاهای دیگر
window.checkLogin = checkLogin;
window.refreshUserDisplay = refreshUserDisplay;