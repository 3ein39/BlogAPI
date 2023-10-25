const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./models/post');
const Comment = require('./models/comment');
const User = require('./models/user');

// TODO connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://3ein39:OL0CXpwFnerkEmaL@cluster0.xl4xaqc.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

// REST API
// GET /api/posts
// POST /api/posts
// POST/api/users/new
// POST/api/users/login

app.get('/api/posts', async (req, res) => {
   let posts = await Post.find();

   if (!posts) {
     return res.status(500).send('No posts found');
   }

   res.json(posts);
});





app.listen(3000, () => {
    console.log('Server running on port 3000');
}
);