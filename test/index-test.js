var chai = require('chai'),
	btce = require('../index.js');

chai.should();

describe('Tests without keys', function () {

	it('Testing failed "getInfo" response from BTC-e API', function () {
		btce.callBtceMethod('getInfo', '', '').then(function (data) {
			data.success.should.be.equal(0);
		}).catch(console.error);
	});

});
