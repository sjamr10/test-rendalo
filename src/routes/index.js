const db = require("../db");

module.exports = ({ router }) => {
  router.get("/api/people", async (ctx, next) => {
    try {
      const result = await db.getPeople();
      ctx.body = result;
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });

  router.post("/api/people", async (ctx, next) => {
    try {
      const result = await db.savePerson(ctx.request.body);
      ctx.body = result;
    } catch (error) {
      ctx.status = 500;
      ctx.body = error;
    }
  });
};
