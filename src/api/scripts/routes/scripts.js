module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/angus-cow',
      handler: 'scripts.angusCow',
    },
    {
      method: 'GET',
      path: '/commercial-sheep',
      handler: 'scripts.commercialSheep',
    },
    {
      method: 'GET',
      path: '/ewe',
      handler: 'scripts.ewe',
    },
    {
      method: 'GET',
      path: '/ram',
      handler: 'scripts.ram',
    },
    {
      method: 'GET',
      path: '/sire',
      handler: 'scripts.sire',
    },
    {
      method: 'GET',
      path: '/all',
      handler: 'scripts.all',
    },
  ],
};
