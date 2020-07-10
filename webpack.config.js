/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const styledComponentsTransformer = require('typescript-plugin-styled-components').default();
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {

  // docks: https://webpack.js.org/guides/typescript/

  mode: 'development',

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'inline-source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    // Add '.js' as well to resolve error: 'Module not found: Error: Can't resolve './emitter'...'
    // https://github.com/webpack/webpack-dev-server/issues/720#issuecomment-268470989
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [

      /* CSS */
      /* docks: https://webpack.js.org/loaders/css-loader/ */
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }
        ]
      },

      /* SASS(SCSS) */
      /* docks: https://webpack.js.org/loaders/sass-loader/ */
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: 'style-loader'
          },
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader'
          }
        ]
      },

      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          // styled-components debugging
          // https://github.com/Igorbek/typescript-plugin-styled-components#ts-loader
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.min.js',
    publicPath: '/'
  },

  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    historyApiFallback: true
  },

  plugins: [
    // new BundleAnalyzerPlugin(), // stop for now
    new HtmlWebpackPlugin({ template: 'public/index.html' })
  ]
};
