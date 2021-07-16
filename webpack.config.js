const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const pkgInfo = require('./package.json');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `qcloud-apaas-sdk-${pkgInfo.version}.js`,
    library: {
      name: 'QcloudApaasSDK',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react']
          }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  externals: {
    react: 'React',
  },
};
