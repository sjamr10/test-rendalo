const db = require("../db");

module.exports = ({ router }) => {
  router.get("/api/people", async (ctx, next) => {
    ctx.body = {};
  });

  router.post("/api/people", async (ctx, next) => {
    ctx.body = {};
  });
};
