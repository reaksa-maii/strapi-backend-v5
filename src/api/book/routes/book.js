"use strict";

/**
 * book router
 */

// @ts-ignore
const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::book.book", {
  config: {
    find: {
      middleware: ["api::book.book-middleware"],
    },
    findOns: {
      middleware: ["api::book.book-middleware"],
    },
    create: {
      middleware: ["api::book.book-middleware"],
    },
  },
});
