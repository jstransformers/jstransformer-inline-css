'use strict'

const inlineCss = require('inline-css')
const extend = require('extend-shallow')

exports.name = 'inline-css'
exports.inputFormats = ['inline-css']
exports.outputFormat = 'html'

exports.renderAsync = function (str, options, locals) {
  const opts = extend({}, options, locals)
  if (!opts.url) {
    opts.url = 'http://example.com'
  }
  return new Promise((resolve, reject) => {
    inlineCss(str, opts).then(out => {
      if (out) {
        return resolve(out)
      }
      reject(out)
    })
  })
}
