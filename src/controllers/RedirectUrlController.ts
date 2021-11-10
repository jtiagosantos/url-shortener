import { Request, Response } from 'express';

class RedirectUrlController {
  public async handle(request: Request, response: Response) {
    try {
      const { hash } = request.params;

      const url = {
        originURL: 'https://github.com/jtiagosantos',
        hash,
        shortenedURl: 'http://localhost:3000/4M9i5ayy3'
      };

      response.redirect(url.originURL);
    } catch(error: any) {
      response.status(500).json({ error: error.message });
    }
  };
};

export { RedirectUrlController };