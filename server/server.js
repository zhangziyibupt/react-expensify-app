const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
// if exists, its running in Heroku
const port = process.env.PORT || 3000;

// serve up assets in the publicPath dir
app.use(express.static(publicPath));

// router
app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});

// start the server, port 3000, callback - called when the server is up
app.listen(port, () => {
    console.log('sever is up!')
});