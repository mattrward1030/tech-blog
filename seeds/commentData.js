const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Wow I'm the best blog writter...I should do this for a living",
    user_id: 1,
    post_id: 1,
  },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
