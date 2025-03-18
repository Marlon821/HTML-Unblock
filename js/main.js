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

function openProxy1() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('tools').style.display = 'none';

    let proxyContainer = document.getElementById('proxyContainer');
    proxyContainer.style.display = 'block';

    // Reset proxy object each time it's opened
    let proxyFrame = document.getElementById('proxyFrame');
    proxyFrame.data = ""; // Clear the old proxy session
    setTimeout(() => {
        proxyFrame.data = "https://diplomatic-daisi-lunnaras-1c7d558f.koyeb.app/"; // Replace with your actual proxy URL
    }, 100); // Small delay ensures proper reloading
}

function closeProxy1() {
    let proxyContainer = document.getElementById('proxyContainer');
    proxyContainer.style.display = 'none';
    document.getElementById('tools').style.display = 'block';

    // Completely reset proxy session when closed
    let proxyFrame = document.getElementById('proxyFrame');
    proxyFrame.data = "";
}
function openProxy() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('tools').style.display = 'none';

    let proxyContainer = document.getElementById('proxyContainer');
    proxyContainer.style.display = 'block';

    // Reset proxy object each time it's opened
    let proxyFrame = document.getElementById('proxyFrame');
    proxyFrame.data = ""; // Clear the old proxy session
    setTimeout(() => {
        proxyFrame.data = "https://close-lexis-lunnaras-55ceb418.koyeb.app/"; // Replace with your actual proxy URL
    }, 100); // Small delay ensures proper reloading
}

function closeProxy() {
    let proxyContainer = document.getElementById('proxyContainer');
    proxyContainer.style.display = 'none';
    document.getElementById('tools').style.display = 'block';

    // Completely reset proxy session when closed
    let proxyFrame = document.getElementById('proxyFrame');
    proxyFrame.data = "";
}