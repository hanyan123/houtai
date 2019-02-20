const Koa=require('koa')
const Router = require('koa-router');
const app=new Koa();
const router = new Router();


const banner = require('./banner')
const userlist = require('./userlist')
const roleslist = require('./roleslist')
router.get('/', (ctx, next) => {
    ctx.body='孙悟空'
  });
router.get('/1', (ctx, next) => {
    ctx.body='猪八戒'
    // try {
    //     ctx.body='猪八戒'
    // } catch (err) {
    //     ctx.response.status = err.statusCode || err.status || 500;
    //     ctx.response.body = {
    //         message: err.message
    //     };
    // }
    
});

router.get('/ads',(ctx, next)=>{
    ctx.body=banner
})

router.get('/userlist',(ctx, next)=>{
    ctx.body=userlist
})
router.get('/roleslist',(ctx, next)=>{
    ctx.body=roleslist
})
app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

app.listen(3000)