const { logger } = require('./tu-module');

const info = logger('INFO:')
info('this is an info message')
// => 'INFO: this is an info message'

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')