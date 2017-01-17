var Router  = require('koa-router');
var routers = new Router();
var controllers = require('../../controllers/mangas');


routers.get('/list',controllers.getCartoonList);
routers.get('/:id',controllers.getCartoon);
routers.get('/:user',controllers.getUser);




module.exports = routers;
