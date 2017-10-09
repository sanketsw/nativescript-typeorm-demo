
require('thenify-all').withCallback(
  require('crypto-browserify'),
  exports, [
    'pbkdf2',
    'pseudoRandomBytes',
    'randomBytes'
  ]
)
