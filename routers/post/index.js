var Router  = require('koa-router');
var routers = new Router();


var controllers = require('../../controllers/posts/');
routers.get('/:post',controllers.getPost);

module.exports = routers;
