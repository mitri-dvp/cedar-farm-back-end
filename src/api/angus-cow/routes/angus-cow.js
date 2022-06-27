'use strict';

/**
 * angus-cow router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::angus-cow.angus-cow', {
  config: {
    find: {
      policies: ['global::is-authenticated'],
    },
  },
});
