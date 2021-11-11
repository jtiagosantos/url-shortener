import { Request, Response } from 'express';
import { DeleteUrlService } from '../services/DeleteUrlService';

class DeleteUrlController {
  public async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const url = await new DeleteUrlService().execute(id);

      if(url) {
        response.status(200).json({ message: 'Url deleted' });
        return;
      }

      response.status(404).json({ error: 'URL not found' });
    } catch(error: any) {
      response.status(500).json({ error: error.message });
    }
  };
};

export { DeleteUrlController };