const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

app.post('/pay', (req, res) => {
  // Simulate payment
  res.json({ paymentId: 'PAY456', status: 'paid', amount: req.body.amount });
});

app.listen(PORT, () => console.log(`Payment service running on port ${PORT}`));
