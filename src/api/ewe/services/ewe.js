'use strict';

/**
 * ewe service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ewe.ewe');
