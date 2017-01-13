const bodyParser = require('koa-bodyparser');
const routers = require('./routers/routers');
const passport = require('koa-passport');
const compress = require('koa-compress');
const logger = require('koa-logger');
const cors = require('koa-cors');
const convert = require('koa-convert');


const catchException = () => {
  return convert(function *(next){
    try{
      yield next;
    }catch(e){
      console.log('出错了：'+JSON.stringify(e));
    }
  })
}

process.on('uncaughtException',function(err){
  console.log(err);
});

process.on('unhandledRejection',function(err){
  console.log(err);
});


module.exports = init = (app) =>{
  app.proxy = true ;
  app.use(catchException());
  app.use(convert(cors({'origin':'*'})));

  app.use(convert(logger()));
  app.use(bodyParser());
  app.use(convert(passport.initialize()));
  app.use(convert(passport.session()));
  app.use(routers.routes());

  app.use(convert(compress({
    filter: function (content_type) {
      return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  })));

};
