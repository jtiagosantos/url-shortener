import { Router } from 'express';
import { ShortenUrlController } from '../controllers/ShortenUrlController';
import { RedirectUrlController } from '../controllers/RedirectUrlController';
import { GetAllUrlsController } from '../controllers/GetAllUrlsController';

const router = Router();

router.post('/api/v1/shorten', new ShortenUrlController().handle);
router.get('/:hash', new RedirectUrlController().handle);
router.get('/api/v1/index', new GetAllUrlsController().handle);

export { router };