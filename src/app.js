const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
const router = new Router();

const routes = require("./routes");
routes({ router });

app.use(logger());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(3000);

module.exports = server;
