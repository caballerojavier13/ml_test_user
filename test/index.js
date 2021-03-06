var chai = require('chai');

chai.use(require('chai-json-schema'));

var assert = chai.assert;

var Test_user = require('../index'),

get_user = Test_user.get_user;

var userSchema = {
  username: 'string',
  email: 'string',
  password: 'string'
};

describe('#get_user', function() {
  it('Creación de usuario de test para: MLA', function() {
    assert.jsonSchema(get_user('MLA', 1000), userSchema);
  });

  it('Creación de usuario de test para: MLB', function() {
    assert.jsonSchema(get_user('MLB', 1000), userSchema);
  });
});