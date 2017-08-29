class Users {
  get(req) {
    return {
      message: 'In user.create method'
    }
  }
}

module.exports = new Users();
