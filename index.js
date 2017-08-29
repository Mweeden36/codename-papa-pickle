const { send } = require('micro');
const { router, get } = require('microrouter');

const hello = (req, res) => {
  console.log(req.query);
  // req.query accesses query params, req.params accesses url params.
  send(res, 200, `Test received: ${req.query.message}`);
};

module.exports = router(
  get('/', hello),
);
