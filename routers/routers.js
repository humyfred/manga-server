var Router = require('koa-router');
var routers= new Router();
var manga  = require('./manga/index');
var post   = require('./post');
var me     = require('./me');
// session middleware will run before authorize
// routers
//   .use(session())
//   .use(authorize());

routers.redirect('/login', 'sign-in');

routers.use('/mangas',manga.routes());
routers.use('/posts',post.routes());
routers.use('/me',me.routes());
routers.use('/users',me.routes());

module.exports = routers;
