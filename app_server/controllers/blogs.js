module.exports.homelist = function(req,res){
    res.render('blog-list',{title:'Home'});
};

module.exports.blogInfo = function(req,res){
    res.render('blog-info',{title:'Blog Info'});
};

module.exports.blogInfo2 = function(req,res){
    res.render('blog-info2',{title:'Blog Info'});
};

module.exports.blogInfo3 = function(req,res){
    res.render('blog-info3',{title:'Blog Info'});
};

module.exports.blogDetails = function(req,res){
    res.render('blog-details',{title:'Blog Details'});
};

module.exports.blogDetails2 = function(req,res){
    res.render('blog-details2',{title:'Blog Details'});
};

module.exports.blogDetails3 = function(req,res){
    res.render('blog-details3',{title:'Blog Details'});
};

module.exports.blog2Details = function(req,res){
    res.render('blog2-details',{title:'Blog Details'});
};

module.exports.blog2Details2 = function(req,res){
    res.render('blog2-details2',{title:'Blog Details'});
};

module.exports.blog2Details3 = function(req,res){
    res.render('blog2-details3',{title:'Blog Details'});
};

module.exports.blog3Details = function(req,res){
    res.render('blog3-details',{title:'Blog Details'});
};

module.exports.blog3Details2 = function(req,res){
    res.render('blog3-details2',{title:'Blog Details'});
};

module.exports.addReview = function(req,res){
    res.render('blog-review-form',{title:'Add Review'});
};
