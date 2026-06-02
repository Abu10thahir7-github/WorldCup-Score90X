import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import worldCupRoutes from './modules/worldcup.routes';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/worldcup', worldCupRoutes);

app.get('/', (_, res) => {
  res.send('Score90X Backend Running 🚀');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});
