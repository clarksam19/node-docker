const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const config = require ('./config/config');
const PORT = config.PORT;
const mongoURL = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@` +
                 `${config.MONGO_IP}:${config.MONGO_PORT}/?authSource=admin`
const app = express();

const router = require('./routes/route');

app.use(express.json());
app.use('/entries', router);

mongoose
  .connect(mongoURL,
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('DB connection success'))
  .catch((e) => console.log(e));

app.get('/', (req, res) => {
  res.send('<h1>Hello World!!!</h1>');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));