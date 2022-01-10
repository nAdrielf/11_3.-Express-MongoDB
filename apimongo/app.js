const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectDB = require('./config/mongoose');

dotenv.config({ path: './config/config.env' });
connectDB();

// routes
app.use('/api/cars', require('./routes/route'));

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
