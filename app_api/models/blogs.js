var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        "default": Date.now
    }
});


var blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    director: String,
    rating: {
        type: Number,
        "default": 0,
        min: 0,
        max: 5
    },
    cast: [String],
    reviews: [reviewSchema]
});

mongoose.model('Blog', blogSchema);
