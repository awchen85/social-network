const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');
const { route } = require('./user-routes');

// /api/thoughts
router
.route('/').get(getAllThoughts);
// api/thoughts/<userId>
router.route('/:userId').post(createThought);

// /api/thoughts/<thoughtId>
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)

// /api/<userId>/<thoughtId> Delete thought
router.route('/:userId/:thoughtId').delete(deleteThought);

// /api/thoughts/<thoughtId?/reactions
router
.route('/:thoughtsId/reactions')
.post(addReaction)

// /api/<thoughtId>/reactions/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;