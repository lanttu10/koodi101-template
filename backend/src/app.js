const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('kcors');


const enviro = require('./controllers/enviroC');

const app = module.exports = new Koa();

app.use(logger());

app.use(cors({ credentials: true }));
app.use(bodyParser());

const publicRouter = new Router({ prefix: '/api' });

publicRouter.post('/enviro', enviro.addMeasure);
publicRouter.get('/enviro', enviro.getMeasures);

app.use(publicRouter.routes());
app.use(publicRouter.allowedMethods());
