document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("homeBtn").addEventListener("click", showHome);
    document.getElementById("toolsBtn").addEventListener("click", showTools);
});

function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('tools').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'none';
}

function showTools() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('tools').style.display = 'block';
    document.getElementById('gameContainer').style.display = 'none';
}