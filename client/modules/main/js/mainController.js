angular.module('HomePage', [])
    .controller('homeCtrl', function ($scope,$rootScope,$state,Main) {
        console.log('homeCtrl : '+JSON.stringify('wewe'))
        /*if(!$rootScope.user){
            $state.go('app.auth');
            console.log('welcome to auth Crtl');
            return;
        }*/
        function getComment(type){
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

        $scope.addComment = function(comment){
            console.log('comment : '+JSON.stringify(comment));
            var oneComment = {
                comment : comment,
                userId : '5ce91fad212780218268d0e4'
            };
            Main.addComment(oneComment,function (err,result) {
                 console.log('result:  '+JSON.stringify(result));
                  $scope.message = result;
                  getComment('PARENT');
            });
        }
    });