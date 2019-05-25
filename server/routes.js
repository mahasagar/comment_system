var requireDir = require('require-dir');
var controllers = requireDir('./controller/api');

module.exports.register = function (router) {

//    router.route('/register').post(controllers.userAPI.createUser);
//    router.route('/login').post(controllers.userAPI.loginUser);

    router.route('/comment').post(controllers.commentAPI.createComment);
    router.route('/getComments').post(controllers.commentAPI.getComment);
//    router.route('/comment').get(controllers.commentAPI.getComment);

};