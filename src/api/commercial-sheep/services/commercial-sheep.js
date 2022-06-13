'use strict';

/**
 * commercial-sheep service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::commercial-sheep.commercial-sheep');
