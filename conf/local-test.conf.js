const { config: baseConfig } = require('./base.conf.js');

const localConfig = {
  // Adding browserstackLocal to browserstack-service to initiate local binary
  services: [
    [
      'browserstack',
      { browserstackLocal: true, opts: { forcelocal: false } },
    ],
  ],
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'latest',
      'bstack:options': {
        buildName: process.env['BROWSERSTACK_BUILD_NAME'],
        source: 'webdriverio:sample-master:v1.0'
      }
    },
  ],
  specs: ['./tests/specs/local_test.js'],
};

exports.config = { ...baseConfig, ...localConfig };
