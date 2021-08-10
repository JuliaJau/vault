import express from 'express';
import { readCredentials } from './utils/credentials';

const app = express();
const port = 3000;

app.get('/api/credentials/:search', async (req, res) => {
  res.send(req.params.search);
});

app.get('/', (_req, res) => {
  res.send('Hello Credentials');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
