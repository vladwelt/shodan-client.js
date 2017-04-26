/*
  Copyright Jesús Pérez <jesusprubio@gmail.com>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';


// Main object, to wrap everything.

// Root methods.
const client = require('./lib/index');

// Grouped methods.
client.config = require('./lib/config')
client.streams = require('./lib/streams');
client.exploits = require('./lib/exploits');


module.exports = client;
