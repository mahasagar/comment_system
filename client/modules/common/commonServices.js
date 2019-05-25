
/*global moment*/
angular.module('commonServices', [])
    .filter('formatDate', function() {
        return function(input,format) {
            if (input !== null) {
                return  moment(input).format(format);
            }
        };
    })
    .factory('Common', function ($http) {
        var common = {};
        var areaName = null;

        common.callAPI = function(method,URL,param,callback) {
             console.log('param--------',JSON.stringify(param));
            if(method === "GET"){
                $http.get(URL,param).then(function (data) {
                        callback(data);
                    }).error(function (error) {
                        callback(null);
                    });
            }else if(method === "POST") {
                $http.post( URL, param).then(function (data,error) {
                    if (error) {
                        callback(null);
                    } else {
                        callback(data);
                    }
                })
            }else{
                callback({error : 'No Method Found'});
            }
        };

        common.callPOSTAPI = function(URL,param,callback) {
            $http.post( URL, param).then(function (data,error) {
                if (error) {
                    callback(null);
                } else {
                    callback(data);
                }
            })
        };
        return common;
    });