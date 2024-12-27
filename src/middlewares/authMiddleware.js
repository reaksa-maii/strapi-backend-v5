'use strict';

/**
 * `authMiddleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In authMiddleware middleware.');

    await next();
  };
};
