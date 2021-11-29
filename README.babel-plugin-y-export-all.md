# `babel-plugin-y-export-all` (default: enabled)

Makes all top-level module definitions exported (adding `export` keyword to declaration).

Additionally all references to these variables will be replaced with `exports.<reference>`.
This is a closer behaviour to ES6 export bindings,
where changing the exported value outside of the module would make the change reflect inside the module.
See http://2ality.com/2015/07/es6-module-exports.html .

In:

```js
let _a = 5;

let foo = function() {
  return _a;
}
```

Out:

```js
export let _a = 5;

export let foo = function() {
  return exports._a;
}
```

**NOTE** A negative side-effect. While debugging, Chrome won't be able to get the value of an exported variable,
because the source map will reference `exports.something`, while you still hover `something`.
Tracked in https://github.com/ysoftwareab/babel-preset-y/issues/2 .

To disable in `.babelrc.js`:

```js
module.exports = {
  presets: [
    ['y', {
      'babel-plugin-y-export-all': {
        disabled: true
      }
    }]
  ]
};
```
