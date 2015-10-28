# A module for calling BTC-e trading API method

It's a simple module with only one purpose:

* Calling BTC-e trading API method

Actually it was written to call *getInfo* and nothing more. But I figured it
can be modified in the future so here it is on github.

# Installing

```
npm install btce-nodejs-call-method --save
```

# Using

```
let btce = require('');
btce.callBtceMethod(
	'getInfo',
	'YOUR API KEY',
	'YOUR SECRET KEY'
).then(function (data) {
	console.log('BTC count: ', data.return.funds.btc);
}).catch(console.error);
```
