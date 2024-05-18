// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET requests to /comments
app.get('/comments', (req, res) => {
  res.send('This is a GET request to /comments');
});

// Create a route for POST requests to /comments
app.post('/comments', (req, res) => {
  res.send('This is a POST request to /comments');
});

// Create a route for GET requests to /comments/:commentId
app.get('/comments/:commentId', (req, res) => {
  res.send('This is a GET request for /comments/' + req.params.commentId);
});

// Create a route for PUT requests to /comments/:commentId
app.put('/comments/:commentId', (req, res) => {
  res.send('This is a PUT request for /comments/' + req.params.commentId);
});

// Create a route for DELETE requests to /comments/:commentId
app.delete('/comments/:commentId', (req, res) => {
  res.send('This is a DELETE request for /comments/' + req.params.commentId);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Path: index.js
// Import the comments.js module
const comments = require('./comments.js');

// Log the output of the comments.js module
console.log(comments);

// Path: comments.js
// Export the comments module
module.exports = comments;

// Run the code
// node index.js
// Output
// [Function: comments]

// Path: comments.js
// Export the comments module as an object
module.exports = {
  comments: 'This is a comment',
  other: 'This is another comment'
};

// Run the code
// node index.js
// Output
// { comments: 'This is a comment', other: 'This is another comment' }

// Path: comments.js
// Export the comments module as a function
module.exports = function () {
  return {
    comments: 'This is a comment',
    other: 'This is another comment'
  };
};

// Run the code
// node index.js
// Output
// [Function: comments]

// Path: comments.js
// Export the comments module as a function
module.exports = function () {
  return {
    comments: '
