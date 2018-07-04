const path = require('path');
const BuildNotifier = require('webpack-build-notifier');

module.exports = {
  mode: 'development',
  entry: './src/client/router.jsx',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015', 'react',
          ],
        },
      },
    ],
  },
  plugins: [
    new BuildNotifier({
      title: 'Website',
      // logo: path.resolve('./img/favicon.png'),
      // suppressSuccess: true,
    }),
  ],
};
