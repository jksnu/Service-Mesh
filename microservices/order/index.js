const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

app.post('/create-order', (req, res) => {
  // Simulate order creation
  res.json({ orderId: 'ORD123', status: 'created', product: req.body.product });
});

app.listen(PORT, () => console.log(`Order service running on port ${PORT}`));
