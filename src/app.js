import { Dino } from "./models/Dino.js";
import { GameArea } from "./models/GameArea.js";

const WIDTH = 600;
const HEIGHT = 300;

const gameArea = new GameArea(WIDTH, HEIGHT);
gameArea.debug = true;

const floorHeight = 30;
const dino = new Dino();
dino.width = 20;
dino.height = 60;
dino.x = 10;
dino.y = HEIGHT - dino.height - floorHeight;
dino.color = "green";

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function drawFloor(ctx) {
  ctx.fillStyle = "gray";
  ctx.fillRect(0, gameArea.height - floorHeight, gameArea.width, floorHeight);
}

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 */
function drawBackground(ctx) {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, gameArea.width, gameArea.height);
}

gameArea.setGameLoop(() => {
  drawBackground(gameArea.ctx);
  dino.draw(gameArea.ctx);
  drawFloor(gameArea.ctx);
});

onload = () => gameArea.start();
// @ts-ignore
window.gameArea = gameArea;
