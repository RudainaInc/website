const express = require('express');
const router = express.Router();

const News = require('../../models/News');

// @route   GET api/news/test
// @desc    Tests news route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'News Works' }));


router.post('/add', (req, res) => {
    const newNews = new News(req.body);
    newNews.save();
    res.json(req.body)
})

router.get('/all', (req, res) => {
    News.find()
    .then( newsws => {
        const news = [];
        for (i=0; i < newsws.length; ++i) {
            news.push(newsws[i]);
        }
        res.json(news);
    })
});

module.exports = router;