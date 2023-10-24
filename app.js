const express = require('express');
const app = express();

// TODO connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://3ein39:OL0CXpwFnerkEmaL@cluster0.xl4xaqc.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

mongoose.connection.on('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});



app.listen(3000, () => {
    console.log('Server running on port 3000');
}
);