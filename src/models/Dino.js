export class Dino {
  /** @type {number} */ width;
  /** @type {number} */ height;
  /** @type {string} */ color;
  /** @type {number} */ x;
  /** @type {number} */ y;

  constructor() {}

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
