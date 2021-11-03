const koa = require('koa');
const defaultRouter = require('./routes/default');
const koaServer = new koa();
const API_PORT = 8121;
const bodyparser = require("koa-bodyparser"); 
const koajson = require("koa-json");
koaServer.use(koajson());
koaServer.use(bodyparser());


defaultRouter(koaServer);

koaServer.listen(API_PORT, () => {
    console.log(`Listening on: ${API_PORT}`)
});


