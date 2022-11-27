const router = require('express').Router();
const { get } = require('http');
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
.route('/')
.get(getAllThoughts)
.post(addThought)

// /api/thoughts/:thoughtId
router
.route('/thoughtsId')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router
.route('/:thoughtsId/reactions')
.post(addReaction)
.delete(deleteReaction)

module.exports = router;