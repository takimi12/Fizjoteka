// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const productSchema = new Schema({
//   sellerId: String,
//   sellerCategory: String,
//   name: String,
//   quantity: Number,
//   price: Number
// });

// const transactionSchema = new Schema({
//   transactionId: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   status: {
//     type: String,
//     required: true
//   },
//   products: [productSchema],
//   customer: {
//     email: {
//       type: String,
//       required: true
//     },
//     client: {
//       type: String,
//       required: true
//     },
//     address: {
//       type: String,
//       required: true
//     },
//     zip: {
//       type: String,
//       required: true
//     },
//     city: {
//       type: String,
//       required: true
//     },
//     country: {
//       type: String,
//       required: true
//     },
//     language: {
//       type: String,
//       required: true
//     }
//   },
//   amount: {
//     type: Number,
//     required: true
//   },
//   currency: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   method: {
//     type: Number,
//     required: true
//   },
//   urlReturn: {
//     type: String,
//     required: true
//   },
//   timeLimit: Number,
//   channel: Number,
//   waitForResult: Boolean,
//   regulationAccept: Boolean,
//   shipping: Number,
//   transferLabel: String,
//   sign: String,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Transaction = mongoose.model('Transaction', transactionSchema);

// module.exports = Transaction;
