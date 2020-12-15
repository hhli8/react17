module.exports = {
  plugins: [
    // require('postcss-preset-env'),
    // require('autoprefixer')(),
    require('postcss-cssnext')(),
    require('postcss-pxtorem')({
      rootValue: 75,
      selectorBlackList: ['weui','mu'],
      propList: ['*']
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    })
  ]
}