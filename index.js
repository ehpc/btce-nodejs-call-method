/**
 * A module for calling BTC-e trading API methods
 * @module index.js
 * @author Eugene Maslovich <ehpc@ehpc.io>
 */

var https = require('https'),
	querystring = require('querystring'),
	crypto = require('crypto'),
	nonce = Math.round((new Date()).getTime() / 1000);

/**
 * Calls the specified BTC-e API method
 * @param {string} method Method name
 * @param {string} apiKey BTC-e API key
 * @param {string} secretKey BTC-e API secret key
 * @return {Promise}
 */
function callBtceMethod(method, apiKey, secretKey) {
	var options = {
			hostname: 'btc-e.com',
			port: 443,
			path: '/tapi',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Key': apiKey
			}
		},
		data = querystring.stringify({
			nonce: ++nonce, // Some arbitrary nonce (> previous nonce)
			method: method // Api method
		}),
		req;

	// Data length
	options.headers['Content-Length'] = Buffer.byteLength(data);
	// Signing data
	options.headers.Sign = crypto
		.createHmac('sha512', secretKey)
		.update(data)
		.digest('hex');

	return new Promise(function (resolve, reject) {
		req = https.request(options, function (res) {
			var body = '';
			// When we have some data
			res.on('data', function (data) {
				// Add current data to already acquired data
				body += data;
			});
			// When all data has been transmitted
			res.on('end', function () {
				try {
					// Returning JSON
					resolve(JSON.parse(body));
				}
				catch (e) {
					reject(e);
				}
			});
		});
		// Writing data to stream
		req.write(data);
		req.end();
		req.on('error', reject);
	});
}

module.exports.callBtceMethod = callBtceMethod;
