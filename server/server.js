const express = require('express');
const app = express();
const routes = require('../routes/routes');

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});