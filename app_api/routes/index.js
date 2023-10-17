var express = require('express');
var router = express.Router();
var ctrlBlogs = require('../controllers/blogs');
var ctrlReviews = require('../controllers/reviews');
router.get('/blogs', ctrlBlogs.blogsList);
router.post('/blogs', ctrlBlogs.blogsCreate);
router.get('/blogs/:blogid', ctrlBlogs.blogsReadOne);
router.put('/blogs/:blogid', ctrlBlogs.blogsUpdateOne);
router.delete('/blogs/:blogid', ctrlBlogs.blogsDeleteOne);
// reviews
router.post('/blogs/:blogid/reviews', ctrlReviews.reviewsCreate);
router.get('/blogs/:blogid/reviews/:reviewid', ctrlReviews.reviewsReadOne);

router.put('/blogs/:blogid/reviews/:reviewid', ctrlReviews.reviewsUpdateOne);
router.delete('/blogs/:blogid/reviews/:reviewid', ctrlReviews.reviewsDeleteOne);

module.exports = router;
