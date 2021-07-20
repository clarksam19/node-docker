const express = require('express');
const mongoose = require('mongoose');
const config = require ('./config/config');
const PORT = config.PORT;
const mongoURL = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@` +
                 `${config.MONGO_IP}:${config.MONGO_PORT}/?authSource=admin`
const app = express();

mongoose
  .connect(mongoURL,
    { useNewUrlParser: true , useUnifiedTopology: true }
  )
  .then(() => console.log('DB connection success'))
  .catch((e) => console.log(e));

app.get('/', (req, res) => {
  res.send('<h1>Hello World!!!</h1>');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));