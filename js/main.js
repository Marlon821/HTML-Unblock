function showSection(section) {
    document.getElementById("home").style.display = "none";
    document.getElementById("tools").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById(section).style.display = "block";
}

function changeTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
}

// Load saved theme on startup
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("selectedTheme") || "dark";
    changeTheme(savedTheme);
});
