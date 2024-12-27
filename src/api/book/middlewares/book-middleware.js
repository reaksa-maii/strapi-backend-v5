'use strict';

/**
 * `book-middleware` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In book-middleware middleware.');

    await next();
  };
};
