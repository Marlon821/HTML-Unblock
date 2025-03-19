const games = [
    { name: "Run 3", url: "games/run3.html", image: "images/run3.jpg", mobile: true },
    { name: "Slope", url: "games/slope/index.html", image: "images/slope.jpg", mobile: false },
    { name: "Tetris", url: "games/tetris.html", image: "images/tetris.jpg", mobile: true }
];

function loadGames() {
    const container = document.querySelector(".games-container");
    container.innerHTML = "";

    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <p>${game.name} ${game.mobile ? "📱" : ""}</p>
        `;
        gameCard.onclick = () => openGame(game.url);
        container.appendChild(gameCard);
    });
}

function openGame(url) {
    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", loadGames);
