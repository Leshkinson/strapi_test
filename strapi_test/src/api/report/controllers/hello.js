module.exports = {
  async index(ctx, next) {
    // called by GET /hello
    ctx.body = 'Hello World!'; // we could also send a JSON
    console.log(ctx)
    console.log(ctx.body)
  },
};
