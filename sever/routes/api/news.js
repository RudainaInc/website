const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
var path = require('path');

const News = require('../../models/News');

const storage = multer.diskStorage({
    destination: path.join( "./", 'files'),
    limits: {fileSize: 1000000, files:1},
  });

const upload = multer({ storage });

// @route   GET api/news/test
// @desc    Tests news route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'News Works' }));


router.post('/add', upload.single("image"), (req, res) => {
    const data = req.body;
    const file = req.file;
    console.log(file.filename);
    
    const tempName = Date.now() + '-' + data.image_name;
    const tempPath = req.file.path;
    const targetPath = "C:/Users/Rudaina/Desktop/server/client/public/others/" + tempName;
    fs.rename(tempPath, targetPath, function (err) {
        if (err) throw err;
        console.log('renamed complete');
    });

    const otherPath = "/others/"+tempName;

    const newsData = {
        title: data.title,
        content: data.content,
        source: data.source,
        image: otherPath,
        category: data.category,
    }

    const newNews = new News(newsData);
    newNews.save();
    res.json(req.body)
})

router.get('/getRelevantNews', (req, res) => {
    News
    .find( {category: 'relevant'} )
    .then( news => {
        res.json(news);
    });
});

router.get('/getPregnancyNews', (req, res) => {
    News
    .find( {category: 'pregnancy'} )
    .then( news => {
        res.json(news);
    });
});

router.get('/getCharityNews', (req, res) => {
    News
    .find( {category: 'charity'} )
    .then( news => {
        res.json(news);
    });
});

router.get('/all', (req, res) => {
    News.find()
    .then( news => {
        res.json(news);
    })
});

module.exports = router;