const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

// ==== routes
const messageRouter = require('./routes/messages.js');
const userRouter = require('./routes/users.js');
const loginRouter = require('./routes/login.js');
const refreshRouter = require('./routes/refresh.js');

// ==== db connection
const { connection } = require('../database/config.js');

require('dotenv').config();

// ==== app and port
const app = express();
const PORT = process.env.PORT || 8080;

// ==== middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// ==== API handlers

const apiV = '1';

app.use(`/api/v${apiV}/messages`, messageRouter);
app.use(`/api/v${apiV}/users`, userRouter);
app.use(`/api/v${apiV}/login`, loginRouter);
app.use(`/api/v${apiV}/refresh`, refreshRouter);

// ==== serve static files
app.use(express.static(path.join(__dirname, '../client/public')));

// ==== handle page refresh
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

// ==== listen
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});