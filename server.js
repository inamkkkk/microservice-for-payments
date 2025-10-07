const express = require('express');
const app = express();
const paymentRoutes = require('./routes/paymentRoutes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/payments', paymentRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});