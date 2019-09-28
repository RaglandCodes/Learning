import Paddle from './paddle.js';
import InputHandler from './input.js';

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');

// ctx.fillStyle= '#f00'
// ctx.fillRect(20, 20, 20, 20);
// ctx.fillRect(60, 60, 20, 20);
// ctx.clearRect(0, 0, 800, 600)

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)
new InputHandler(paddle)

paddle.draw(ctx)

let lastTime = 0;
function gameLoop (timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(deltaTime);
    paddle.draw(ctx);
    
    requestAnimationFrame(gameLoop)
}

gameLoop();