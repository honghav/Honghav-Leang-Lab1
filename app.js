// app.js
import express from 'express';

const app = express();

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, CI/CD!');
});

export default app;
