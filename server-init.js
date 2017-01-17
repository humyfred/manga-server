const bodyParser = require('koa-bodyparser');
const routers = require('./routers/routers');
const passport = require('koa-passport');
const compress = require('koa-compress');
const logger = require('koa-logger');
const cors = require('koa-cors');
const convert = require('koa-convert');
const cluster = require('cluster');
const error_handler = require('./error-handler');


process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

process.on('rejectionHandled', (p) => {
  console.log('here is rejection :',p);
});


module.exports = init = (app) =>{
  app.proxy = true ;
  //domain_server(app);
  app.use(convert(error_handler()));
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


  process.on('uncaughtException ',function(err){
    console.log('error catch by process', err.stack);
    try {
          var killTimer = setTimeout(function () {
              process.exit(1);
          }, 30000);
          killTimer.unref();

          app.close();

          if (cluster.worker) {
              cluster.worker.disconnect();
          }
      } catch (e) {
          console.log('process trigger error when exit', e.stack);
      }
  });

};

//发送消息的使用方式
// var udpLog = dgram.createSocket('udp4');
// var cluster = require('cluster');
//
// process.on('uncaughtException', function (err) {
//     udpLog.send('process ' + process.pid + ' down', /* ...
// 一些发送 udp 消息的参数 ...*/, function () {
//         cluster.worker.disconnect();
//     });
//
//     server.close();
//
//     // 保证 worker.disconnect 不会拖太久..
//     setTimeout(function () {
//         cluster.worker.disconnect();
//     }, 100).unref();
// });
