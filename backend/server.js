// Minimal Express backend for Vercel Services
const express = require('express');
const app = express();

app.use(express.json()); // parse JSON request bodies

// Health-check route: confirms the backend is reachable on Vercel
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Local dev server (Vercel handles the port itself in production)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));