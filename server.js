//Install express server
// const spdy = require('spdy'); http2 express, but requires certification, not using it for now!
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/herokuAngular'));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/herokuAngular/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000);