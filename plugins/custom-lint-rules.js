const NoTypeNumber = require('./rules/no-type-number')

module.exports = {
  id: 'my-local-plugin',
  rules: {
    oas3: {
      'no-type-number': NoTypeNumber,
    },
  },
}

