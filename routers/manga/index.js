var Router  = require('koa-router');
var routers = new Router();
var controllers = require('../../controllers/mangas');
routers.get('/:user',controllers.getUser);




module.exports = routers;
