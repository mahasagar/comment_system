angular.module('HomePage', [])
    .controller('homeCtrl', function ($scope,$rootScope,$state,Main) {
        console.log('homeCtrl : '+JSON.stringify('wewe'))
        /*if(!$rootScope.user){
            $state.go('app.auth');
            console.log('welcome to auth Crtl');
            return;
        }*/
        function getComment(type,cb){
            var query ={};
            if(type === 'PARENT'){
                query.parent = true;
            }
            $scope.comments= [];
            Main.getComments(query,function (err,result) {
                 console.log('result:  '+JSON.stringify(result));
                  $scope.comments = result;
            });
        }
        getComment('PARENT');

        $scope.addComment = function(comment,parentComment){
            console.log('comment : '+JSON.stringify(comment));
            var oneComment = {
                comment : comment,
                userId : '5ce91fad212780218268d0e4'
            };
            if(parentComment){
                oneComment.parentCommentId = parentComment._id;
            }
            Main.addComment(oneComment,function (err,result) {
                 console.log('result:  '+JSON.stringify(result));
                  $scope.message = result;
                  getComment('PARENT');
                   $scope.replyView = null;
            });
        }
        $scope.addReplyView = function(comment){
            $scope.replyView = {
                commentId : comment._id
            };
        }
        $scope.replyComments = {};
        $scope.viewReplies = function(comment){
             var query = {
                parentCommentId : comment._id
             };
             Main.getComments(query,function (err,result) {
                  console.log('result:  '+JSON.stringify(result));
                  $scope.replyComments[comment._id.toString()] = result;
             });
        }
    });