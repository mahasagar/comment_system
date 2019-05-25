var Comment = require('../../model/Comment');
var ObjectId = require('mongoose').Types.ObjectId;

function createComment(req, res) {
    var result = {
        status : false
    };
    var reqParam = req.body;
     Comment.create(reqParam,function (err, response) {
        if (response) {
            result.message = 'Comment Added';
            result.status = true;
            res.json(result);
        }else{
            result.message = 'Comment Not Created';
            res.json(result);
        }
    });
}

function getComment(req,res){
     var result = {
        status : false
    };
    var reqParam = req.query;
    var findQuery = {
        userId : ObjectId(reqParam.userId)
    }
    if(reqParam.parentCommentId){
        findQuery.parent.commentId = ObjectId(reqParam.parentCommentId);
    }
    console.log('findQuery : '+JSON.stringify(findQuery));
    Comment.find(findQuery,function (err, response) {
        if (response) {
            result.response = response;
            result.status = true;
            res.json(result);
        }else{
            result.message = 'No Comments';
            res.json(result);
        }
    });
}


module.exports.getComment = getComment;
module.exports.createComment = createComment;






