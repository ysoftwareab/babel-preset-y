module.exports = {
  root: true,

  extends: [
    'plugin:y/node'
  ],

  rules: {
    // no import syntax via babel in this repo
    'global-require': 'off'
  }
};
