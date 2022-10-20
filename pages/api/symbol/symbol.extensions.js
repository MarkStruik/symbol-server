import ms from 'milsymbol'
const Canvas = require("canvas");

export default function asNodeCanvas(symbol) {
    const MAX_SIZE = 2000; // Maximum width/hight for the canvas to aviod out of memory
    ms._brokenPath2D = true; // Make it use our custom polyfill for Path2D
    const ratio = 1;
    const canvas = Canvas.createCanvas(
      Math.min(symbol.width, MAX_SIZE),
      Math.min(symbol.height, MAX_SIZE)
    );
    const ctx = canvas.getContext("2d");
    ctx.scale(ratio * symbol.style.size / 100, ratio * symbol.style.size / 100);
    ctx.translate(
      -(symbol.bbox.x1 - symbol.style.strokeWidth - symbol.style.outlineWidth),
      -(symbol.bbox.y1 - symbol.style.strokeWidth - symbol.style.outlineWidth)
    );
    symbol.canvasDraw.call(symbol, ctx, symbol.drawInstructions);
    return canvas;
  };