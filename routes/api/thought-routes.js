const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');


// /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/<thoughtId>
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

// /api/<userId>/<thoughtId> Delete thought
router.route('/:thoughtId/:userId').delete(deleteThought);

// /api/thoughts/<thoughtId?/reactions
router
.route('/:thoughtsId/reactions')
.post(createReaction)

// /api/<thoughtId>/reactions/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router;