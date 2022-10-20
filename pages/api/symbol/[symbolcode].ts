import ms from 'milsymbol'
import { NextApiRequest, NextApiResponse } from 'next';

import asNodeCanvas from './symbol.extensions';

export default function handler(req : NextApiRequest, res: NextApiResponse) {
    const symbolcodeData = (req.query.symbolcode as string)?.split('.')
    
    if ( symbolcodeData){
      const symbolcode: string = symbolcodeData[0]
      const symbol = new ms.Symbol(symbolcode, req.query)

      if ( symbolcodeData[1]?.toUpperCase() === "PNG"){
        res.setHeader("Content-Type", "image/png");
        res.send((asNodeCanvas(symbol) as any).pngStream())
      }
      else {
        // if not requesting a png specifically we return svg
        const svg = symbol.asSVG();
        res.setHeader("Content-Type", "image/svg+xml");
        res.send(svg)
      }
    }
  }

  