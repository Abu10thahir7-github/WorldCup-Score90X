import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import AllMatchesRoutes from '../src/routes/matches.routes';
import { getAllLiveMatchesRepo } from './repositories/AllLiveMatches.repository';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use('/api', AllMatchesRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
