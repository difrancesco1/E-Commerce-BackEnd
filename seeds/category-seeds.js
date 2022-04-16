const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Games',
  },
  {
    category_name: 'PC',
  },
  {
    category_name: 'Doggies',
  },
  {
    category_name: 'Pet Food',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
