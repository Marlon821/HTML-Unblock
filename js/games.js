const games = [
    // Locally hosted games
    { name: "Minecraft", url: "games/Eaglercraft_1.12.2.html", image: "images/minecraft.jpg" },
    { name: "Minecraft (mobile)", url: "games/EaglercraftX_1.8.html", image: "images/minecraft.jpg" },

    // Games pulled from your GitHub repo
    { name: "Basket Random", url: "https://adorable-kheer-b9ad7f.netlify.app/games/basketrandom/index.html", image: "images/flappybird.jpg" },
    { name: "Retro Bowl", url: "https://adorable-kheer-b9ad7f.netlify.app/games/retrobowl/index.html", image: "images/tetris.jpg" },
    { name: "Riddle School 2", url: "https://adorable-kheer-b9ad7f.netlify.app/games/riddleschool2/index.html", image: "images/flappybird.jpg" },
    { name: "1v1.lol", url: "https://adorable-kheer-b9ad7f.netlify.app/games/1v1lol/index.html", image: "images/tetris.jpg" },
    { name: "Baldis Basics", url: "https://adorable-kheer-b9ad7f.netlify.app/games/baldisbasics/index.html", image: "https://adorable-kheer-b9ad7f.netlify.app/games/baldisbasics/splash.png" },
    { name: "Crossy Road", url: "https://adorable-kheer-b9ad7f.netlify.app/games/crossyroad/index.html", image: "images/tetris.jpg" },
    { name: "Eggy Car", url: "https://adorable-kheer-b9ad7f.netlify.app/games/eggycar/index.html", image: "images/tetris.jpg" },
    { name: "Geometry Dash", url: "https://adorable-kheer-b9ad7f.netlify.app/games/geometrydash/index.html", image: "images/tetris.jpg" },
    { name: "Breakout", url: "https://adorable-kheer-b9ad7f.netlify.app/games/breakout/index.html", image: "images/tetris.jpg" },
    { name: "Breakout", url: "https://adorable-kheer-b9ad7f.netlify.app/games/breakout/index.html", image: "images/tetris.jpg" },
    { name: "Breakout", url: "https://adorable-kheer-b9ad7f.netlify.app/games/breakout/index.html", image: "images/tetris.jpg" },

];

function loadGames() {
    const container = document.querySelector(".games-container");
    container.innerHTML = "";

    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <p>${game.name}</p>
        `;
        gameCard.onclick = () => openGame(game.url);
        container.appendChild(gameCard);
    });
}

function openGame(url) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('tools').style.display = 'none';
    let gameContainer = document.getElementById('gameContainer');
    gameContainer.style.display = 'block';
    gameContainer.innerHTML = `
        <button id="backButton" style="position: absolute; top: 10px; left: 10px; padding: 10px 15px; background: red; color: white; border: none; cursor: pointer; z-index: 1000;">Back</button>
        <object id="gameFrame" type="text/html" data="${url}" style="width: 100vw; height: 100vh; border: none; position: absolute; top: 0; left: 0;"></object>
    `;
    document.getElementById('backButton').addEventListener("click", closeGame);
}

function closeGame() {
    let gameContainer = document.getElementById('gameContainer');
    gameContainer.style.display = 'none';
    document.getElementById('home').style.display = 'block';
    
    // Stop the game audio by removing the object element
    let gameFrame = document.getElementById('gameFrame');
    if (gameFrame) {
        gameFrame.remove();
    }
}

document.addEventListener("DOMContentLoaded", loadGames);