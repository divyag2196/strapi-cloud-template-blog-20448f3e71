"use strict";

const Razorpay = require("razorpay");

module.exports = {
  async createRazorpayOrder(ctx) {
    try {
      const { amount, customerName, email, phoneNumber, items } = ctx.request.body;

      if (!amount) {
        return ctx.badRequest("Amount is required");
      }

      // Create Razorpay instance
      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });

      // Create Razorpay order
      const order = await razorpay.orders.create({
        amount: amount * 100, // Razorpay uses paise
        currency: "INR",
        payment_capture: 1,
      });

      // Save pending order in Strapi
      const newOrder = await strapi.entityService.create("api::order.order", {
        data: {
          customerName,
          email,
          phoneNumber,
          items,
          total: amount,
          status: "pending",
          razorpayOrderId: order.id,
        },
      });

      return {
        razorpayOrder: order,
        strapiOrder: newOrder,
      };
    } catch (err) {
      console.error("❌ Razorpay error:", err);
      ctx.throw(500, "Failed to create Razorpay order");
    }
  },
};
