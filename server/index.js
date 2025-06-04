const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');

const app = express();
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());

const vibes = [];

app.get('/api/vibes', (req, res) => {
  res.json(vibes);
});

app.post('/api/vibes', (req, res) => {
  const { message } = req.body;
  if (typeof message === 'string' && message.trim()) {
    const vibe = { message: message.trim(), date: new Date().toISOString() };
    vibes.push(vibe);
    res.status(201).json(vibe);
  } else {
    res.status(400).json({ error: 'Invalid message' });
  }
});

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Vibe server running on port ${port}`);
});
