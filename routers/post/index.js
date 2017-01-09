var Router  = require('koa-router');
var routers = new Router();


var controllers = require('./controllers');
routers.get('/:post',controllers.getPost);

exports.routers;
