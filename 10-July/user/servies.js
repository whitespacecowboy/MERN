const express = require('express');
const app = express();
const PORT = 3001
app.use(express.json());

app.get('/users', (req, res) => {
    res.json([{ id: 201, name: "Reema Puri" }]);
});

app.listen(PORT, () => console.log('User Service running on port', PORT));
