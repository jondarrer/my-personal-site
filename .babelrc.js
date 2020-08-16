module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    'inline-react-svg',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-runtime',
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.md'],
      },
    ],

    [
      'file-loader',
      {
        name: '[hash].[ext]',
        extensions: ['png', 'jpg', 'jpeg', 'gif'],
        publicPath: '/images',
        outputPath: '/dist/images',
        context: '',
        limit: 0,
      },
    ],
  ],
};
