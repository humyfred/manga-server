var Router = require('koa-router');
var routers= new Router();
var manga  = require('./manga');
var post   = require('./post');
var me     = require('./me');
// session middleware will run before authorize
// routers
//   .use(session())
//   .use(authorize());

routers.redirect('/login', 'sign-in');

routers.use('/mangas',manga);
routers.use('/posts',post);
routers.use('/me',me);


exports.routers
