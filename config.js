'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://test:test@ds125623.mlab.com:25623/blog-app';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-blog-app';
exports.PORT = process.env.PORT || 8080;
