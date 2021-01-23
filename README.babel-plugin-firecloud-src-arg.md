# `babel-plugin-firecloud-src-arg`

Adds an extra argument with info about location (file/line/column) to calls of a function e.g. logger.

To configure in `.babelrc.js`:

```js
// provide a static list of function calls to amend with src information
let srcFuns = [
  'console.log',
  'console.error'
];

// or provide a dynamic list
let srcFuns = function() {
  return [
    'log',
    'error'
  ].map(function(consoleFun) {
    return `console.${consoleFun}`;
  });
}

module.exports = {
  presets: [
    ['firecloud', {
      'babel-plugin-firecloud-src-arg': {
        srcFuns
      }
    }]
  ]
};
```
