import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import productsRouter from './routes/products.js';
import b2bRouter from './routes/b2b.js';
import journalRouter from './routes/journal.js';

const app = express();
const PORT = process.env.PORT || 4000;
const ORIGIN = process.env.CORS_ORIGIN || '*';

app.use(cors({ origin: ORIGIN }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ ok: true, service: 'Go Figure More API', time: new Date().toISOString() });
});

app.use('/api/products', productsRouter);
app.use('/api/b2b', b2bRouter);
app.use('/api/journal', journalRouter);

// 404
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
