'use strict';

/**
 * ewe router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ewe.ewe', {
  config: {
    find: {
      policies: ['global::is-authenticated'],
    },
  },
});
