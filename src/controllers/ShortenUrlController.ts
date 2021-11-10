import { Request, Response } from 'express';
import shortID from 'shortid';
import { constants } from '../config/constants';

class ShortenUrlController {
  public async handle(request: Request, response: Response) {
    try {
      const { originURL } = request.body;
      const hash = shortID.generate();
      const shortenedURL = `${constants.BASE_URL}/${hash}`;

      response.status(200).json({ originURL, hash, shortenedURL });
    } catch(error: any) {
      response.status(500).json({ error: error.message });
    }
  };
};

export { ShortenUrlController };