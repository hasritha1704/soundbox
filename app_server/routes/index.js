var express = require('express');
var router = express.Router();
var ctrlBlogs = require('../controllers/blogs.js')
var ctrlOthers = require('../controllers/others.js')

router.get('/', ctrlBlogs.homelist);
router.get('/blog',ctrlBlogs.blogInfo);
router.get('/blog2',ctrlBlogs.blogInfo2);
router.get('/blog3',ctrlBlogs.blogInfo3);

router.get('/blog/details', ctrlBlogs.blogDetails)
router.get('/blog/details2', ctrlBlogs.blogDetails2)
router.get('/blog/details3', ctrlBlogs.blogDetails3)

router.get('/blog2/details', ctrlBlogs.blog2Details)
router.get('/blog2/details2', ctrlBlogs.blog2Details2)
router.get('/blog2/details3', ctrlBlogs.blog2Details3)

router.get('/blog3/details', ctrlBlogs.blog3Details)
router.get('/blog3/details2', ctrlBlogs.blog3Details2)

router.get('/blog/review/new',ctrlBlogs.addReview);

router.get('/about',ctrlOthers.about);

module.exports = router;
