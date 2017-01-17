const Koa = require('koa');
const app = new Koa();
const init = require('./server-init');
const cluster = require('cluster');

init(app);

app.on('error', function(err, ctx){
  console.error('error catch by koa', err, ctx);
  //throw new Error('haha');
});

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();

  cluster.on('disconnect', (worker) => {
    console.error('disconnect!');
    cluster.fork();
  });
} else {
  if (!module.parent) app.listen(3000, () =>{
    console.log('server start listen on 3000');
  });
}
