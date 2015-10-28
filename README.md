# A module for calling the BTC-e trading API method

It's a simple module with only one purpose:

* Calling the BTC-e trading API method

Actually it was written to call *getInfo* and nothing more. But I figured it
can be improved in the future so here it is on github.

# Installing

```
npm install btce-nodejs-call-method --save
```

# Using

```
let btce = require('btce-nodejs-call-method');
btce.callBtceMethod(
	'getInfo',
	'YOUR API KEY',
	'YOUR SECRET KEY'
).then(function (data) {
	console.log('BTC count: ', data.return.funds.btc);
}).catch(console.error);
```

# Testing

```
npm test
```
