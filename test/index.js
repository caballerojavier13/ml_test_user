var expect = require('chai').expect,
Test_user = require('../index'),
get_user = Test_user.get_user;

describe('#get_user', function() {

  it('MLB;', function() {
    var user = get_user('MLB',1000);

    expect(user).to.not.be.undefined;

    expect(user.username).to.not.be.undefined;

    expect(user.email).to.not.be.undefined;

    expect(user.password).to.not.be.undefined;

  });

});
/*
describe('#unescape', function() {
  it('converts &amp; into &', function() {
    unescape('&amp;').should.equal('&');
  });

  it('converts &quot; into "', function() {
    unescape('&quot;').should.equal('"');
  });

  it('converts &#39; into \'', function() {
    unescape('&#39;').should.equal('\'');
  });

  it('converts &lt; into <', function() {
    unescape('&lt;').should.equal('<');
  });

  it('converts &gt; into >', function() {
    unescape('&gt;').should.equal('>');
  });

  it('does not double unescape values', function() {
    unescape('&amp;quot;').should.equal('&quot;');
  });

  it('returns empty string if called with falsey value', function() {
    unescape().should.equal('');
    unescape('').should.equal('');
    unescape(null).should.equal('');
  });
});
*/