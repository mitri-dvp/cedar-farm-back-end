'use strict';

/**
 * sire router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::sire.sire', {
  config: {
    find: {
      policies: ['global::is-authenticated'],
    },
  },
});
