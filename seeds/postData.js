const { Post } = require('../models');

const postData = [
  {
    title: 'My Masterpiece',
    content: 'Tour de Force of blogging',
    user_id: 1,
  },

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
