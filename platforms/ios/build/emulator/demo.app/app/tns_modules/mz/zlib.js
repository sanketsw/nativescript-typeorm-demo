
require('thenify-all').withCallback(
  require('browserify-zlib'),
  exports, [
    'deflate',
    'deflateRaw',
    'gzip',
    'gunzip',
    'inflate',
    'inflateRaw',
    'unzip',
  ]
)
