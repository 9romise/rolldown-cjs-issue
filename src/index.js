const config = require('./config.json')

module.exports = {
  meta: 'rule',
  create: function() {
    console.log(config)
    console.log('loaded rule')
  }
}
