'use strict';

/**
 * ram router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ram.ram', {
  config: {
    find: {
      policies: ['global::is-authenticated'],
    },
  },
});
