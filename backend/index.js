require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routers
const router = require('./src/routes.chat.js');

const app = express();
const PORT = process.env.PORT;

// Enable CORS
const corsOptions = {
  origin: '*',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
app.options('', cors(corsOptions));
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Actualiza la conexión a MongoDB
mongoose.connect(process.env.DBUrl);

app.get('/', async (request, response) => {
  return response.send('Backend chatbot');
});

// Router Chat
app.use('/chat/', router);

app.listen(PORT, () => {
  console.log(` app listening on port http://localhost:${PORT}`);
});
