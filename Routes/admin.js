const express = require('express');
const router = express.Router();
// const { Post } = require('../models/admin');

router.get('/', (req, res) => {
    res.render('admin');
});

const mongoose = require('mongoose');
 
const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    date: {
        type: Date,
        default: Date.now
    }
});
 
const Post = mongoose.model('Post', PostSchema);
//------------------------------- POST start -------------------------------------------------
router.post('/', async (req, res) => {
    let blog = new Post({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    });
    blog = await blog.save();

    console.log(req.body);
    res.render('home');
});
//------------------------------- POST end ---------------------------------------------------










module.exports = router;