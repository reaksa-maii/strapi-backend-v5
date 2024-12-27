'use strict';

/**
 * `userPolicy` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In userPolicy policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
