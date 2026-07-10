const express = require('express');
const app = express();
app.use(express.json());

app.get('/products', (req, res) => {
    res.json([{ id: 101, name: "Laptop DELL", price: 102200 }]);
});

app.listen(3002, () => console.log('Product Service running on port 3002'));
