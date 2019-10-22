const { task, parallel } = require('just-task');
const { exec } = require('just-scripts-utils')

task('Build project bundles', function() {
  exec('yarn build');
});

task('build', parallel('Build project bundles'));
