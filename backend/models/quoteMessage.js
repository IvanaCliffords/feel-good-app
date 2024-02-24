

import mongoose from 'mongoose';

const quoteSchema = mongoose.Schema({
  apiId: String,
  message: String,
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;