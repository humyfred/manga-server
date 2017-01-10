var Router  = require('koa-router');
var routers = new Router();
var controllers = require('../../controllers/mangas');

routers.get('/cartoon',controllers.getCartoon);
routers.get('/:user',controllers.getUser);




module.exports = routers;
