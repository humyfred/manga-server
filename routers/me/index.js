var Router  = require('koa-router');
var routers = new Router();


var controllers = require('./controllers');
routers.get('/:me',controllers.me);


exports.routers;
