const koaRouter = require('koa-router')({
    prefix: '/api/v1'
});

const freelancerRouter = require('./freelancer');
const userRouter = require('./user');
const profileRouter = require('./profile');

koaRouter.get('/', (ctx)=> {
     ctx.body = 'Default route hit';
});

//Freelancer Router
koaRouter.use(
    freelancerRouter.routes() 
)
//User Router
koaRouter.use(
    userRouter.routes() 
)
//Profile Router
koaRouter.use(
    profileRouter.routes() 
)
module.exports = (koaServer) => {
    koaServer.use(koaRouter.routes());
};
