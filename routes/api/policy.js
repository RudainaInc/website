const express = require('express');
const router = express.Router();

// @route   GET api/policy/get_priPolicy
// @desc    Tests events route
// @access  Public
router.get('/get_private', (req, res) => res.json({ msg: 'private policy Works' }));

router.get('/get_terms', (req, res) => res.json({ msg: 'term policy works'}))

router.get('/get_another', (req, res) => res.json({msg: 'another policy works'}))

module.exports = router;