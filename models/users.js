const { send, json } = require('micro');

module.exports = {
  get: async (req, res) => {
    return send(res, 200, await Promise.resolve(`Hello user ${req.params.id}`));
  },
  update: async (req, res) => {
    const js = await json(req);
    return send(res, 200, `Updating user ${req.params.id} with info ${js}.`);
  },
  create: async (req, res) => {
    return send(res, 200, 'Test');
  },
  remove: async (req, res) => {
    return send(res, 200, `Deleting user ${req.params.id}`);
  }
}