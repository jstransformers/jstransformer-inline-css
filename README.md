# jstransformer-inline-css

[Inline-CSS](https://www.npmjs.com/package/inline-css) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-inline-css/master.svg)](https://travis-ci.org/jstransformers/jstransformer-inline-css)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-inline-css/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-inline-css)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-inline-css/master.svg)](http://david-dm.org/jstransformers/jstransformer-inline-css)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-inline-css.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-inline-css.svg)](https://www.npmjs.org/package/jstransformer-inline-css)

## Installation

    npm install jstransformer-inline-css

## API

```js
var inlineCss = require('jstransformer')(require('jstransformer-inline-css'))

inlineCss.render('<style>div{color:red;}</style><div/>').body
//=> '<div style="color:red"/>'
```

## License

MIT
