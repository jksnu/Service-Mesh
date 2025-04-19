const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/place-order', async (req, res) => {
  try {
    // Call Order service
    const orderRes = await axios.post('http://order:3002/create-order', req.body);
    // Call Payment service
    const paymentRes = await axios.post('http://payment:3003/pay', {
      orderId: orderRes.data.orderId,
      amount: req.body.amount
    });

    res.json({ message: 'Order placed and paid', order: orderRes.data, payment: paymentRes.data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`User service running on port ${PORT}`));
