
require('thenify-all').withCallback(
  require('nativescript-nodeify/empty'),
  exports, [
    'lookup',
    'resolve',
    'resolve4',
    'resolve6',
    'resolveCname',
    'resolveMx',
    'resolveNs',
    'resolveSrv',
    'resolveTxt',
    'reverse'
  ]
)
