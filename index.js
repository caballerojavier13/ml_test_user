var Client = require('node-rest-client').Client;

var ACCESS_TOKEN = 'ae2c5a71ca34c73cbddb3d963665c4110b6b771ecd2a085cc27374b297b88d6e';

var postRequest = function(url, args, callback) {
  var client = new Client();
  var responseData = {};
  client.post(url, args, function(data, response) {
    responseData = data;
    callback(responseData);
  });
};

function parseDataUser(responseData){
  return {
    username: responseData.nickname,
    email: responseData.email,
    password: responseData.password
  };
}


/*

curl 

-H "Content-Type: application/json" -H "Accept: application/json" 

-X POST 

-d '{"site_id":"MLA","account_money":100}' 

http://api.testuser.ml.com/users?access_token=$ACCESS_TOKEN

*/

function get_user(site, account_money) {

  var args = {
    data: { 
      'site_id': site,
      'account_money': account_money
    },
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  try{

    postRequest("http://api.testuser.ml.com/users?access_token=" + ACCESS_TOKEN, 
      args, 
      function (response) {

        return response;


      }
      );

  }catch(err){
    console.err(err);
  }

}

module.exports.get_user = get_user;