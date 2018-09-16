module.exports = Object.freeze({
  NODE_PORT: process.env.NODE_PORT || 3000,
  MONGO_DB: {
    HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.MONGO_PORT || 27017,
    DATABASE: process.env.MONGO_DB || 'socialShare',
    get URI() {
      return `mongodb://${this.HOST}:${this.PORT}/${this.DATABASE}`;
    },
  },
});
