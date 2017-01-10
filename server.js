const Koa = require('koa');
const app = new Koa();
const init = require('./server-init');

init(app);

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});


if (!module.parent) app.listen(3000, () =>{
  console.log('server start listen on 3000');
});
