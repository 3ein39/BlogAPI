const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        content: String,
        date: Date,
        // link to user in user collection
        userID: { type: Schema.Types.ObjectId, ref: 'User' },
        // link to post in post collection
        postID: { type: Schema.Types.ObjectId, ref: 'Post' }
    });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;