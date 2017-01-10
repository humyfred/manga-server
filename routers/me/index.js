var Router  = require('koa-router');
var routers = new Router();


var controllers = require('../../controllers/me');
routers.get('/:me',controllers.me);


module.exports = routers;
