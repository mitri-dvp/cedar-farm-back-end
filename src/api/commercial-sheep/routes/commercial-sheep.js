'use strict';

/**
 * commercial-sheep router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::commercial-sheep.commercial-sheep', {
  config: {
    find: {
      policies: ['global::is-authenticated'],
    },
  },
});
