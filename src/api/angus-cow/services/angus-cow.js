'use strict';

/**
 * angus-cow service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::angus-cow.angus-cow');
