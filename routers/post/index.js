var Router  = require('koa-router');
var routers = new Router();


var controllers = require('../../controllers/posts');
routers.get('/list',controllers.getPostList);
routers.get('/:post',controllers.getPost);
routers.get('/like/:post',controllers.likePost);
module.exports = routers;
