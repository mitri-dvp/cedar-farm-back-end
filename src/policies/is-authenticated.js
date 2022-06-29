module.exports = (ctx, config, { strapi }) => {
  console.log('Request:', ctx.request);
  console.log('Header Host:', ctx.request.headers.host);
  console.log('Request URL:', ctx.request.url);
  const url = new URL(ctx.request.headers.host + ctx.request.url);
  const key = url.searchParams.get('key');
  return key === process.env.API_KEY ? true : false;
};
