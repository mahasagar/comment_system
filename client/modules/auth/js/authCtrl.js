angular.module('appAuthCtrl', [])
    .controller('authCtrl', function ($scope,Auth,$rootScope,$state,Common) {
        console.log('in authCtrl');
        $scope.featureName='LOGIN';
        $scope.registerFunction = function (user) {
            if(user){
                Auth.registerService(user,function (err,result) {
                    if(result){
                       // $state.go('app.home');
                    }else{
                        $scope.message = 'Registration Issue';
                    }
                })
            }
        };
        $scope.loginFunction = function (login) {
            Auth.loginService(login,function (err,result) {
                if(result){
                    //$state.go('app.home');
                }else{
                    $scope.message = 'Username/Password Wrong';
                }
            })
        };

    });