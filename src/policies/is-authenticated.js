module.exports = (ctx, config, { strapi }) => {
  const url = new URL(ctx.request.headers.host + ctx.request.url);
  const key = url.searchParams.get('key');
  return key === process.env.API_KEY ? true : false;
};