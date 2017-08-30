const { send } = require('micro');
const { router, get, post, put, del } = require('microrouter');
const config = require('./config.json');
const users = require('./models/users');

const hello = (req, res) => {
  console.log(req.query);
  // req.query accesses query params, req.params accesses url params.
  send(res, 200, `Test received: ${req.query.message}`);
};

module.exports = router(
  get('/', hello),
  get('/users/:id', users.get),
  put('/users/:id', users.update),
  del('/users/:id', users.remove),
  post('/users', users.create),
);
