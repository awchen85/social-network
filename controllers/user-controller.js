const { User } = require('../models');

const userController = {
    //get all users
    getAllUsers(req, res) {
        User.find({})
        // .populate({
        //     path: 'thoughts',
        //     select: '-__v'
        // })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    //get one user by ID
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    // createUser
    createUser({ body }, res) {
        User.create(body)
         .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },
    //update user by ID
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ Message: "No user found with this ID "});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },
    //delete user
    deleteUser({ params}, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    //add a friend
    addFriend({ params, body }, res) {
    User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: body } },
        { new: true, runValidators: true }
    )
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No User found with that id!' });
            return;
        }
    res.json(dbUserData)
    })
    .catch(err => res.json(err));
},
    //remove a friend
    removeFriend({ params }, res) {
        User.findOneAndDelete({ _id: params.commentId })
        .then(deletedFriend => {
            if (!deletedFriend) {
                return res.status(404).json({ message: 'No user with that ID found!' });
            }
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $pull: { friends: params.userId }},
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this ID!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    }
};

module.exports = userController;