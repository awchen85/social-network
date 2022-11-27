const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate:[ isEmail, 'invalid email' ]
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce(
        (total, friends) => total + friends.length + 1,
        0
    );
});

const User = model('User', UserSchema);

module.exports = User;