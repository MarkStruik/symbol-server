import ms from 'milsymbol'
import { NextApiRequest, NextApiResponse } from 'next';
const Canvas = require("canvas");

export default function handler(req : NextApiRequest, res: NextApiResponse) {
    const symbolcodeData = (req.query.symbolcode as string)?.split('.')
    
    if ( symbolcodeData){
      const symbolcode: string = symbolcodeData[0]
      const symbol = new ms.Symbol(symbolcode, req.query)

      if ( symbolcodeData[1]?.toUpperCase() === "PNG"){
        res.setHeader("Content-Type", "image/png");
        res.send(asNodeCanvas(symbol).pngStream())
      }
      else {
        // if not requesting a png specifically we return svg
        const svg = symbol.asSVG();
        res.setHeader("Content-Type", "image/svg+xml");
        res.send(svg)
      }
    }
  }

  function asNodeCanvas(symbol: ms.Symbol) {
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