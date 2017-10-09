
require('thenify-all').withCallback(
  require('nativescript-nodeify/empty'),
  exports, [
    'exec',
    'execFile',
  ]
)
