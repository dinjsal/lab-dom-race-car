class Game {
    constructor () {
        this.startScreen = document.querySelector('#game-intro');
        this.gameScreen = document.querySelector('#game-screen');
        this.gameEndScreen = document.querySelector('#game-end');
        this.player = null;
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }

    start() {
        this.gameScreen.height = `${this.height}px`;
        this.gameScreen.width = `${this.width}px`;

        this.startScreen.style.display = 'none';

        this.gameScreen.style.display = 'block';

        this.gameLoop();
    }

    gameLoop() {
        if (this.gameIsOver) return;

        this.update();

        window.requestAnimationFrame(() => {
            this.gameLoop();
        })
    }

    update() {
        //empty for now
    }

}