const express = require('express');
const app = express();
app.use(express.json());

app.get('/orders', (req, res) => {
    res.json([{ id: 5001, user: 201, product: 101 }]);
});

app.listen(3003, () => console.log('Order Service running on port 3003'));
