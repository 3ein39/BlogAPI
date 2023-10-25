// seeds file for fake data for testing purposes
// run this file to seed the database with fake data

const mongoose = require('mongoose');
const Post = require('./models/post');
const User = require('./models/user');
const Comment = require('./models/comment');

mongoose.connect('mongodb+srv://3ein39:OL0CXpwFnerkEmaL@cluster0.xl4xaqc.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

mongoose.connection.on('open', () => {
console.log('Connected to MongoDB');
}
);

// create a user
const user = new User({
    username: 'Hussein Hany',
    email: 'hussein.hany.cs@gmail.com',
    password: '123456'
});

// create a post
const post = new Post({
    title: 'Hello title',
    content: 'Hello content',
    date: new Date(),
    published: true,
    userID: user._id
});

// create a comment
const comment = new Comment({
    content: 'Hello comment',
    date: new Date(),
    userID: user._id,
    postID: post._id
});

// save the user
async function run() {

    // delete all users, posts and comments
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});

    await user.save();
    await post.save();
    await comment.save();
    console.log({user, post, comment});

}

run();