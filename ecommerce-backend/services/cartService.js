const Cart = require('../models/Cart');

const createCart = async (cartData) => {
  const cart = new Cart(cartData);
  return await cart.save();
};

const getCartByUserId = async (userId) => {
  return await Cart.findOne({ userId }).populate('products.productId');
};

const updateCart = async (userId, updateData) => {
  return await Cart.findOneAndUpdate({ userId }, updateData, { new: true }).populate('products.productId');
};

const deleteCart = async (userId) => {
  return await Cart.findOneAndDelete({ userId });
};

module.exports = { createCart, getCartByUserId, updateCart, deleteCart };