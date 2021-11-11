import express from 'express';
import { MongodbConnection } from './database/config';

import { router } from './routes/url.routes';

const app = express();
const PORT = 3000;

const database = new MongodbConnection();
database.connection();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));