"use strict";
try {
  module.exports = require('./register-shim')().Promise || null
} catch(e) {
  module.exports = null
}
