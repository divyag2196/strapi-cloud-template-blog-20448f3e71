// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::order.order');

"use strict";

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/orders/create-razorpay-order", // custom endpoint
      handler: "order.createRazorpayOrder",
      config: {
        auth: false, // make true if you want authentication required
      },
    },
  ],
};
