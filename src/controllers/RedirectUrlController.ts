import { Request, Response } from 'express';
import { GetUrlService } from '../services/GetUrlService';

class RedirectUrlController {
  public async handle(request: Request, response: Response) {
    try {
      const { hash } = request.params;
      const url = await new GetUrlService().execute(hash);

      if(url) {
        response.redirect(String(url.originURL));
        return;
      }

      response.status(404).json({ error: 'URL not found' });
    } catch(error: any) {
      response.status(500).json({ error: error.message });
    }
  };
};

export { RedirectUrlController };