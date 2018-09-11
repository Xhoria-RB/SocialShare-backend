const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The title is required']
  },
  content: {
    type: String,
    required: [true, 'The content is required']
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  img: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }
});
module.exports = mongoose.model('Article', articleSchema);
