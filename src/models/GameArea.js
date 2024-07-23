export class GameArea {
  constructor(width, height) {
    this.lastTime = 0;
    this.debug = false;
    this.width = width;
    this.height = height;

    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");

    if (this.ctx === null) {
      throw new Error("Could not get 2d context");
    }

    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }

  start() {
    if (!this.gameLoop) {
      throw new Error("Game loop not set");
    }

    requestAnimationFrame(this.update.bind(this));
  }

  update(time) {
    this.clear();
    this.gameLoop();
    this.showFps(time);
    requestAnimationFrame(this.update.bind(this));
  }

  showFps(time) {
    if (this.debug) {
      const deltaTime = time - this.lastTime;
      this.lastTime = time;

      const fps = Math.round(1000 / deltaTime);

      this.ctx.fillStyle = "black";
      this.ctx.font = "20px Verdana";
      this.ctx.fillText("fps: " + fps, 10, 30);
    }
  }

  setGameLoop(gameLoop) {
    this.gameLoop = gameLoop;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
