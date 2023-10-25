const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./models/post');
const Comment = require('./models/comment');
const User = require('./models/user');
const authMiddleware = require('./auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const secretKey = config.get('jwtSecret');

// TODO connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://3ein39:OL0CXpwFnerkEmaL@cluster0.xl4xaqc.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
});


// use body parser
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World');
});

// REST API
// GET /api/posts
// POST /api/posts
// POST/api/users/new
// POST/api/users/login


// the post routes are protected by the auth middleware
app.post('/api/posts', authMiddleware, async (req, res) => {
   res.json({message : "Post created"});
});

app.post('api/user/login', async (req, res) => {
    console.log(req.body);
    let {name, password} = req.body;

    // check if user exists
    let result = await User.findOne({username: name, password});
    if (!result) {
        return res.status(400).send('User not found');
    }

    // Generate a JWT
    const payload = {
        id: user._id,
        username: user.username,
    };

    jwt.sign(payload, secretKey, { expiresIn: '1h' }, (err, token) => {
        if (err) {
            return res.status(500).json({ msg: 'JWT generation failed' });
        }
        res.json({ token });
    });
});
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