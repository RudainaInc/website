const express = require('express');
const router = express.Router();

// @route   GET api/news/test
// @desc    Tests news route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'News Works' }));


router.post('add', (req, res) => {
    
})

module.exports = router;