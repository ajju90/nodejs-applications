// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const users = {
    Bhau: 'Bhau',
    Ajay: 'Ajay'
};

app.get('/', (req, res) => {
    res.render('index', { message: null });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        res.render('login', { username });
    } else {
        res.render('index', { message: 'Invalid username or password' });
    }
});

app.get('/login', (req, res) => {
    res.redirect('/');
});

app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});
