const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Metal',
  },
  {
    tag_name: 'Hip Hop',
  },
  {
    tag_name: 'Black',
  },
  {
    tag_name: 'Green',
  },
  {
    tag_name: 'Purple',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'Teal',
  },
  {
    tag_name: 'Video Games',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
