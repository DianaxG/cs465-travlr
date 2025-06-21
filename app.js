const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // 

require(path.join(__dirname, 'app_api', 'models', 'db'));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const apiRouter = require('./app_api/routes/index');
app.use('/api', apiRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
