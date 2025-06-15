const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Connect to MongoDB 
require(path.join(__dirname, 'app_api', 'models', 'db'));

// Set view engine and register partials
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Static folders for CSS and images
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Regular routes 
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// API routes 
const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

