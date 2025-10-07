const { v4: uuidv4 } = require('uuid');

const processPayment = async (req, res, next) => {
  try {
    const { amount, currency, token } = req.body;

    if (!amount || !currency || !token) {
      return res.status(400).json({ success: false, message: 'Missing required fields.' });
    }

    if (typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid amount.' });
    }

    if (currency.length !== 3) {
        return res.status(400).json({ success: false, message: 'Invalid currency code.' });
    }

    const transactionId = uuidv4();

    console.log(`Processing payment for amount: ${amount}, currency: ${currency}, token: ${token}, transactionId: ${transactionId}`);

    res.status(200).json({ success: true, message: 'Payment processed successfully.', transactionId: transactionId });
  } catch (error) {
    next(error);
  }
};

module.exports = { processPayment };