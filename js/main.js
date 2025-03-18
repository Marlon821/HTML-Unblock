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

function openProxy() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('tools').style.display = 'none';
    let proxyContainer = document.getElementById('proxyContainer');
    proxyContainer.style.display = 'block';
    document.getElementById('proxyFrame').data = "https://close-lexis-lunnaras-55ceb418.koyeb.app/"; // Replace with your Koyeb proxy URL
}

function openProxy1() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('tools').style.display = 'none';
    let proxyContainer = document.getElementById('proxyContainer');
    proxyContainer.style.display = 'block';
    document.getElementById('proxyFrame').data = "https://diplomatic-daisi-lunnaras-1c7d558f.koyeb.app/"; // Replace with your Koyeb proxy URL
}

function closeProxy() {
    document.getElementById('proxyContainer').style.display = 'none';
    document.getElementById('tools').style.display = 'block';
}
