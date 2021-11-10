import { Router } from 'express';
import { ShortenUrlController } from '../controllers/ShortenUrlController';
import { RedirectUrlController } from '../controllers/RedirectUrlController';

const router = Router();

router.post('/api/v1/shorten', new ShortenUrlController().handle);
router.get('/:hash', new RedirectUrlController().handle);

export { router };