import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.redirect('http://192.168.10.208:8080');
});

export default router;