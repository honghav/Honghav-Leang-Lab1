// app.js
import express from 'express';

const app = express();

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello World from ES Module Express!');
});

export default app;
