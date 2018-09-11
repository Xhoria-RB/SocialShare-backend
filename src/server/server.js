const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
});

function start() {
    app.listen(port, (err) => {
        if (err) {
            console.warn(`Server Error ${err}`);
            return;
        }
        console.log(`Listening on port ${port}`);
    })
};

// export default start;
module.exports = {
    start
}
