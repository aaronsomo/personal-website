const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./router.js');
const path = require('path');
const db = require('../server/index.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/about', router);

// app.use(express.static(path.join(__dirname, '../client/dist/')), () =>
//   console.log(`rendering`)
// );

app.use(express.static(`${__dirname}/../public`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../public/index.html`));
});

app.listen(PORT, () =>
  console.log(`you're listening to port ${PORT}, l e w d   b e a t s`)
);
