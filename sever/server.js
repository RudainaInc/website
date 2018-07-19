const express     = require('express');
const mongoose    = require('mongoose');
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const passport    = require('passport');

const events  = require('./routes/api/events');
const news    = require('./routes/api/news');
const profile = require('./routes/api/profile');
const users   = require('./routes/api/users');
const admin = require('./routes/api/admin');
const app     = express();

// Body parser middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/events', events);
app.use('/api/news', news);
app.use('/api/profile', profile);
app.use('/api/users', users);
app.use('/api/admin', admin);

// Use Build
// app.use(express.static('client/build'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
