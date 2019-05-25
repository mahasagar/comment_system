angular.module('authServices', [])

    .service('Auth', function(Common,$rootScope) {
        var loginService = function(req, callback) {
            this.loginQuery = {
                username : req.email,
                password : req.password
            };
            var method = 'POST';
            var URL = "/api/login";
            Common.callAPI(method,URL,this.loginQuery,function(response){
                if(response.data.status){
                    setUser(response.data.result,function (err,res) {
                        $rootScope.userLogin = true;
                        $rootScope.user = response.data.result;
                        callback(null,true);
                    });
                }else{
                    callback(null,false);
                }
            });
        };


        var registerService = function(req, callback) {
            this.registerQuery = {
                name: req.name,
                username : req.email,
                password : req.password
            };
            var method = 'POST';
            var URL = "/api/register";
            Common.callAPI(method,URL,this.registerQuery,function(response){
                if(response.data && response.data.status){
                    $rootScope.userLogin = true;
                    $rootScope.user = response.data.result;
                    callback(null,true);
                }else{
                    callback(null,false);
                }
            });
        };


        return {
            loginService: loginService,
            registerService: registerService
        }
    });