exports.log = (...args) => args.join(' ')



exports.logger = (namespace) => exports.bind(null, namespaces)
