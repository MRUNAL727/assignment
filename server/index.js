const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cookieParser = require('cookie-parser');

mongoose.set('strictQuery', false);
mongoose
  .connect(
    'mongodb+srv://mrunal:mrunal@cluster0.8q9qhnc.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(
    (dbo) => {
      console.log('MongoDB connected');
    },
    (err) => {
      console.log('error');
    }
  );
app.use(
  cors({
    credentials: true,
    origin:'http://localhost:3000'
  }),
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);

app.listen(8000, console.log('Running on port no 8000'));
