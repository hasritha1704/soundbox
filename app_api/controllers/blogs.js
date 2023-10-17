var mongoose = require('mongoose');
var Loc = mongoose.model('Blog');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    };
    module.exports.blogsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.blogsList = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.blogsReadOne = async function (req, res) {
    try {
    const blog = await
    Loc.findById(req.params.blogid).exec();
    sendJsonResponse(res, 200, blog);
    console.log(blog)
    } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: 'An error occurred' });
    }
    };
  
    module.exports.blogsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.blogsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
  