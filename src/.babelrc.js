module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['last 2 versions', 'safari >= 7']
      },
      modules: false,
      useBuiltIns: 'usage'
    }]
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    '@babel/plugin-syntax-dynamic-import'
  ]
}
