import { Request, Response } from 'express';
import { GetAllUrlsService } from '../services/GetAllUrlsService';

class GetAllUrlsController {
  public async handle(request: Request, response: Response) {
    try {
      const urls = await new GetAllUrlsService().execute();
      response.status(200).json(urls);
    } catch(error: any) {
      response.status(400).json({ error: error.message });
    }
  };
};

export { GetAllUrlsController };