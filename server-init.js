const bodyParser = require('koa-bodyparser');
const routers = require('./routers/routers');
const passport = require('koa-passport');
const compress = require('koa-compress');
const logger = require('koa-logger');



module.exports = init = (app) =>{
  app.proxy = true ;

  app.use(logger());
  app.use(bodyParser());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(routers.routes());

  app.use(compress({
    filter: function (content_type) {
      return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  }));

};
