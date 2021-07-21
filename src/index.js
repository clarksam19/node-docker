const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv').config();
const config = require ('./config/config');
const cors = require('cors');
const mongoose = require('mongoose');
const redis = require('redis');
let RedisStore = require('connect-redis')(session);
let redisClient = redis.createClient({
  host: config.REDIS_URL,
  port: config.REDIS_PORT,
});

const PORT = config.PORT;
const mongoURL = `mongodb://${config.MONGO_USER}:${config.MONGO_PASSWORD}@` +
                 `${config.MONGO_IP}:${config.MONGO_PORT}/?authSource=admin`
const app = express();

const router = require('./routes/route');
const userRouter = require('./routes/userRoute');

app.use(session({
  store: new RedisStore({client: redisClient}),
  secret: config.SESSION_SECRET,
  cookie: {
    secure: false,
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    maxAge: 30000,
  },
  resave: true,
  saveUninitialized: true,
}));
app.use(cors({}));
app.use(express.json());
app.use('/entries', router);
app.use('/users', userRouter);


mongoose
  .connect(mongoURL,
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  )
  .then(() => console.log('DB connection success'))
  .catch((e) => console.log(e));

app.get('/', (req, res) => {
  res.send('<h1>Hello World!!!</h1>');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));