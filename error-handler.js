 const domain = require('domain');
 const cluster = require('cluster');

module.exports = ( ) =>{
  return function *(next){
    try{
      yield next;
    }catch(err){
      this.status = err.status || 403;
      this.body = err.message;
      console.log('error catch by middleware',err);


      // 根据 status 渲染不同的页面
      // if (status == 403) {
      //   ctx.body = yield ctx.render('403.html', {'err': e});
      // }
      // if (status == 404) {
      //   ctx.body = yield ctx.render('404.html', {'err': e});
      // }
      // if (status == 500) {
      //   ctx.body = yield ctx.render('500.html', {'err': e});
      //   // 触发 koa 统一错误事件，可以打印出详细的错误堆栈 log
      //   ctx.app.emit('error', e, ctx);
      // }
    }
  }

}
