const Koa = require('koa');
const app = new Koa();
const convert = require('koa-convert');
const routers = require('./routers/routers');

app.use(convert (function  *(next){
  const start = new Date();
  yield next;
  const end = new Date();
  const ms  = end -start;
  console.log(`${this.method} ${this.url} ${ms}ms`);
}));

app.use(routers.routes());


// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

if (!module.parent) app.listen(3000, () =>{
  console.log('server start listen on 3000');
});
