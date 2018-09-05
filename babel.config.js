module.exports = {
  // plugins: [
  //   'syntax-trailing-function-commas',
  //   'transform-flow-strip-types',
  //   'transform-es2015-destructuring',
  //   'transform-es2015-parameters',
  //   'transform-es2015-shorthand-properties',
  //   'transform-es2015-spread',
  //   'transform-async-to-generator',
  //   'transform-strict-mode',
  //   ['transform-es2015-modules-commonjs', {allowTopLevelThis: true}],
  // ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {node: '8'},
      },
    ],
    '@babel/preset-flow',
  ],
};
