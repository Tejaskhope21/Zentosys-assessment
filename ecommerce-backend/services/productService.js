const Product = require('../models/Product');

const createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

const getProductsByVendor = async (vendorId) => {
  return await Product.find({ vendorId }).populate('vendorId', 'name email');
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

const updateProduct = async (id, updateData) => {
  return await Product.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = { createProduct, getProductsByVendor, getProductById, updateProduct, deleteProduct };