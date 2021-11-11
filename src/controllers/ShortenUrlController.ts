import { Request, Response } from 'express';
import shortID from 'shortid';
import { constants } from '../config/constants';
import { GetUrlService } from '../services/GetUrlService';
import { SaveUrlService } from '../services/SaveUrlService';

class ShortenUrlController {
  public async handle(request: Request, response: Response) {
    try {
      const { originURL } = request.body;
      const url = await new GetUrlService().execute({ originURL });

      if(url) {
        response.status(200).json(url);
        return;
      }

      const hash = shortID.generate();
      const shortenedURL = `${constants.BASE_URL}/${hash}`;

      const newUrl = await new SaveUrlService().execute({ 
        originURL, 
        hash, 
        shortenedURL,
        views: 0
      });
      
      response.status(200).json(newUrl);
    } catch(error: any) {
      response.status(500).json({ error: error.message });
    }
  };
};

export { ShortenUrlController };