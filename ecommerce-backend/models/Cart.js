const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 },
  }],
  total: { 
    type: Number, 
    required: true, 
    default: 0,
    min: 0 
  },
}, { timestamps: true });

// Virtual to calculate total dynamically
cartSchema.virtual('calculatedTotal').get(function () {
  return this.products.reduce((total, item) => {
    return total + (item.quantity * (item.productId.price || 0));
  }, 0);
});

cartSchema.pre('save', async function (next) {
  // Populate product prices to calculate total
  await this.populate('products.productId');
  this.total = this.calculatedTotal;
  next();
});

module.exports = mongoose.model('Cart', cartSchema);