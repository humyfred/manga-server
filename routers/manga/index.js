var Router  = require('koa-router');
var routers = new Router();
var controllers = require('./controllers');
routers.get('/:user',controllers.getUser);




exports.routers;
