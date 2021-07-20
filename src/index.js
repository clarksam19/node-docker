const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!!!</h1>');
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));