# babel-preset-firecloud [![Build Status][2]][1]

The Babel preset used within Tobii Cloud Services.

In your project's `.babelrc.js`

```js
module.exports = {
  presets: [
    ['firecloud', {
      // debug: false,
      // loose: false,
      // spec: false,
      // useBuiltIns: true,
      // 'preset|plugin': {...options}
    }]
  ]
};
```

Optionally, you can run `node_modules/babel-preset-firecloud/npm-install-peer-dependencies`
in order to install the required peer dependencies.

**NOTE** If you're using an earlier version than Babel 7.0, you can upgrade your `.babelrc` to be dynamic
and use `.babelrc.js` by setting it to:

```json
{
  "preset": [
    "./.babelrc.js"
  ]
}
```

See https://fatfisz.com/blog/using-babelrc-js-today .


## Options

Pass `debug`, `loose`, `spec` or `useBuiltIns` to configure presets/plugins,
as per the semantics defined by [babel-preset-env](https://github.com/babel/babel-preset-env).

Included presets/plugins can be

- further configured by sending options to each of them
- disabled by sending `{"disabled": true}` as `options`


## Firecloud plugins

### `babel-plugin-firecloud-export-all` (default: enabled)

[README.babel-plugin-firecloud-export-all.md](./README.babel-plugin-firecloud-export-all.md)

To disable in `.babelrc.js`:

```js
module.exports = {
  presets: [
    ['firecloud', {
      'babel-plugin-firecloud-export-all': {
        disabled: true
      }
    }]
  ]
};
```

### `babel-plugin-firecloud-src-arg` (default: config-needed)

[README.babel-plugin-firecloud-src-arg.md](./README.babel-plugin-firecloud-src-arg.md)

To disable in `.babelrc.js`:

```js
module.exports = {
  presets: [
    ['firecloud', {
      'babel-plugin-firecloud-src-arg': {
        disabled: true
      }
    }]
  ]
};
```

## Notable plugins (not included)

1. https://github.com/kmagiera/babel-watch
1. https://github.com/furstenheim/babel-plugin-meaningful-logs
1. https://github.com/kentcdodds/babel-plugin-preval


## Misc plugins

1. https://github.com/codemix/flow-runtime/tree/master/packages/babel-plugin-flow-runtime
1. https://github.com/vitalets/babel-plugin-runtyper
1. https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend
1. https://github.com/miraks/babel-plugin-implicit-return
1. https://github.com/andreineculau/babel-plugin-thin-arrows


## License

[UNLICENSE](UNLICENSE)


  [1]: https://github.com/rokmoln/babel-preset-firecloud/actions?query=workflow%3ACI+branch%3Amaster
  [2]: https://github.com/rokmoln/babel-preset-firecloud/workflows/CI/badge.svg?branch=master
