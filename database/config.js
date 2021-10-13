const mongoose = require('mongoose');
require('dotenv').config();

// set the connection options, which will be applied to all connections
// depreciated after mongoose v5.13.8
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const connection = mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log("MongoDB database connection established successfully"))
    .catch(err => console.log(err));

module.exports.connection = connection;
