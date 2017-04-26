/*
  Copyright Jesús Pérez <jesusprubio@gmail.com>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

/* eslint-disable no-console */

'use strict';

const util = require('util');

const client = require('../');

const shodanKey = 'YOUR API KEY';

client.config(shodanKey);
// client.host('167.157.27.7')
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

const searchOpts = {
  facets: 'port:100,country:100',
  // minify: false,
};
client.search('asterisk port:5061', searchOpts)
.then(res => {
  console.log('Result:');
  console.log(util.inspect(res, { depth: 6 }));
})
.catch(err => {
  console.log('Error:');
  console.log(err);
});

// const countOpts = {
//   facets: 'port:100,country:100',
// };
// client.count('freepbx port:5060', countOpts)
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// client.searchTokens('asterisk port:5061')
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// client.ports()
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// client.protocols()
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// client.scan('8.8.8.8,9.9.9.9')
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// client.scanInternet(5065, 'sip')
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// client.services()
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// const queryOpts = {
//   page: 3,
//   sort: 'votes',
// };
// client.query(queryOpts)
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// client.querySearch('webcam', { page: 2 })
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// client.queryTags({ size: 15 })
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// client.accountProfile()
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// client.dnsResolve('google.com,bing.com')
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });

// client.dnsReverse('216.58.194.110,204.79.197.200')
// .then(res => {
//   console.log('Result:');
//   console.log(util.inspect(res, { depth: 6 }));
// })
// .catch(err => {
//   console.log('Error:');
//   console.log(err);
// });
