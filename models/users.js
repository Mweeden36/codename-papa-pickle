const { send, json } = require('micro');
const { request } = require('graphql-request');
const config = require('../config.json');

module.exports = {
  get: async (req, res) => {
    return send(res, 200, await Promise.resolve(`Hello user ${req.params.id}`));
  },
  update: async (req, res) => {
    const js = await json(req);
    return send(res, 200, `Updating user ${req.params.id} with info ${js}.`);
  },

  // TODO: Create Decorator to validate request params
  create: async (req, res) => {
    /*
      createdAt: DateTime!
      id: ID! @isUnique
      firstName: String
      lastName: String
      loginName: String!
      updatedAt: DateTime!
      calendars: [Calendar!]! @relation(name: "UserCalendar")
      email: String @isUnique
      password: String
    */
    const data = await json(req);
    const currentDate = new Date();
    const endpoint = config.graphQLEndpoint;
    const { createUser: user } = await request(endpoint, `
      mutation CreateUser {
        createUser(
          createdAt: ${currentDate}
          firstName: ${data.firstName}
          lastName: ${data.lastName}
          loginName: ${data.loginName}
          updatedAt: ${currentDate}
          email: ${data.email}
          password: ${data.password}
        ) {
          id
          currentDate
          data
        }
      }
    `);
    return send(res, 200, user);
  },
  remove: async (req, res) => {
    return send(res, 200, `Deleting user ${req.params.id}`);
  }
}
