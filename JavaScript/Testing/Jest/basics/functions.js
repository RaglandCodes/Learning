const axios = require('axios');
const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  check: X => X,
  createUser: () => {
    const user = {
      firstName: 'Ragland'
    };
    user['lastName'] = 'Asir';

    return user;
  },
  fetchUser: () =>
    axios
      .get('http://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'err')
};

module.exports = functions;
