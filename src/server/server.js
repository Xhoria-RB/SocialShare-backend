const express = require('express');
const config = require('../config');

const app = express();

require('../routes/setup')(app);

function start() {
  app.listen(config.NODE_PORT, (err) => {
    if (err) {
      console.warn(`Server Error ${err}`);
      return;
    }
    console.log(`Listening on port ${config.NODE_PORT}`);
  });
}

module.exports = {
  start
};
