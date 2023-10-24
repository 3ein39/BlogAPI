const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: String,
        content: String,
        date: Date,
        published: Boolean,
        // link to user in user collection
        userID: { type: Schema.Types.ObjectId, ref: 'User' }
    });

const Post = mongoose.model('Post', postSchema);
