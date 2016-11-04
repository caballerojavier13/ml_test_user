var chai = require('chai');
chai.use(require('chai-json-schema'));

var Test_user = require('../index'),
get_user = Test_user.get_user;

var UsertTest = 

var userSchema = {
  username: 'string',
  email: 'string',
  password: 'string'
};

expect(get_user('MLB', 1000)).to.be.jsonSchema(userSchema);