const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json');

const app = express();
const router = express.Router();
const port = config.port;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.json({ message: 'Great success!' });
});

app.use('/api', router);
app.listen(port);
console.log('Listening on port', port);
