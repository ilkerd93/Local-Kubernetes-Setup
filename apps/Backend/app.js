const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/config', (req, res) => {
  res.json({
    mongo: process.env.MONGO_URL,
    redis: process.env.REDIS_HOST,
    rabbitmq: process.env.RABBITMQ_HOST
  });
});

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});
