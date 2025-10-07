const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');

const jwtSecret = process.env.JWT_SECRET;

if(jwtSecret) {
  router.post('/process', authMiddleware, paymentController.processPayment);
} else {
  router.post('/process', paymentController.processPayment);
}