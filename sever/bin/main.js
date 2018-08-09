import Koa from 'koa'
import router from '../routes/index'

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);
console.log('has listened');
