const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

// Schema for user model
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: [isEmail, 'invalid email'],
        unique: true,
      },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5,
    },
    firstName: String,
    lastName: String,
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    status: {
        type: String,
        default: 'pending'
    },
    group: { // for enterprise level
        type: String,
        required: false,
    },
    clientApiKey: {
        type: String,
        require: true,
        unique: true
    },
    token: String,
    permissions: Array, // for enterprise level
    company: {
        type: String,
        required: false,
    },
    companyId: ObjectId, // for enterprise level
    domains: Array,// used for whitelisting domains that can send messages
}, {
    timestamps: true,
});

/* Bcrypt validation */

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using the new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
