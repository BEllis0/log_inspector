const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// ==== routes
const messageRouter = require('./routes/messages.js');


// ==== db connection
// const { connection } = require('./database/connection.js');

require('dotenv').config();

// ==== app and port
const app = express();
const PORT = process.env.PORT || 8080;

// ==== middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const apiV = '1';

app.use(`/api/v${apiV}/messages`, messageRouter);

// ==== listen
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});