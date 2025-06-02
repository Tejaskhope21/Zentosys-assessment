const Order = require('../models/Order');

const createOrder = async (orderData) => {
  const order = new Order(orderData);
  return await order.save();
};

const getOrderById = async (id) => {
  return await Order.findById(id).populate('userId productIds');
};

const updateOrder = async (id, updateData) => {
  return await Order.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};

module.exports = { createOrder, getOrderById, updateOrder, deleteOrder };