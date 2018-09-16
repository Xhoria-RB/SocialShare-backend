const bodyParser = require('body-parser');
const articlesRoute = require('./article');

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(articlesRoute);
};
