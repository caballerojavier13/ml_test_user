
module.exports = {
	get_user: function(site) {

 		//Example POST method invocation
 		var Client = require('node-rest-client').Client;

 		var client = new Client();

		// set content-type header and data as json in args parameter
		var args = {
			data: { 
				grant_type: 'client_credentials',
				client_id: '8313504635287218',
				client_secret:'30nmWUpkm3DptYFceDs3IW2bWdfYFIRH' 
			},
			headers: { 
				'content-type': 'application/x-www-form-urlencoded' 
			}
		};

		client.post("https://api.mercadopago.com/oauth/token", args, function (data, response) {
		    // parsed response body as js object
		    console.log(data);
		    // raw response
		    console.log(response);
		});

		// registering remote methods
		client.registerMethod("postMethod", "http://remote.site/rest/json/method", "POST");

		client.methods.postMethod(args, function (data, response) {
		    // parsed response body as js object
		    console.log(data);
		    // raw response
		    console.log(response);
		});

		return user;

	},

	add_account_money: function(amount) {

		return amount;

	}
};
