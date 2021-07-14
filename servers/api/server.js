const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../gui/trading-floor/dist/trading-floor')});
});

app.use(express.static(path.join(__dirname, '../gui/trading-floor/dist/trading-floor')));

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
});
