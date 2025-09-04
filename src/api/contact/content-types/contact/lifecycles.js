module.exports = {
  async beforeCreate(event) {
    // Automatically publish new Contact entries
    if (!event.params.data.publishedAt) {
      event.params.data.publishedAt = new Date();
    }
  },
};
