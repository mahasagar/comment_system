angular.module('mainServices', [])

    .service('Main', function(Common,$rootScope) {

        var addComment = function(req, callback) {
            var method = 'POST';
            var URL = "/api/comment";
            Common.callAPI(method,URL,req,function(response){
                console.log('response :  '+JSON.stringify(response));
                if(response.data.status){
                    callback(null,response.data.message);
                }else{
                    callback(null,false);
                }
            });
        };

        var getComments = function(req, callback) {
            var method = 'POST';
            var URL = "/api/getComments";
            Common.callAPI(method,URL,req,function(response){
                if(response.data.status){
                    callback(null,response.data.response);
                }else{
                    callback(null,false);
                }
            });
        };

        return {
            addComment: addComment,
            getComments : getComments
        }
    });