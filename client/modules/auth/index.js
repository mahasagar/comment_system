angular.module('appAuth', ['appAuthCtrl','authServices'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('app.auth', {
                url: "/auth",
                controller: 'authCtrl',
                templateUrl: "modules/auth/template/auth.html"
            })
    });
