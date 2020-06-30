const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const version = Date.now();
const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'dev';

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath);
}

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    title: 'VUE ELE UI',
    template: resolve('../index.html'),
    // favicon: resolve('../favicon.ico'),
    hash: true,
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    },
  }),
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env),
  }),
];

if (!isDev) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: `[name].[hash:5].${version}.css`,
      chunkFilename: `css/[name].[hash:5].${version}.css`,
    }),
  );
}

module.exports = {
  entry: resolve('../src/main.js'),
  output: {
    path: resolve('../dist'),
    filename: `js/[name].[hash:5].${version}.js`,
    chunkFilename: `js/[name].[hash:5].${version}.js`,
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js',
      '@': resolve('../src'),
    },
  },
  plugins,
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial',
        },
        elementUI: {
          name: 'element-ui',
          priority: 20,
          test: /[\/]node_modules[\/]element-ui[\/]/,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve('../src')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader?importLoaders=1' },
        ],
      },
      {
        test: /\.less$/,
        use: [
          isDev ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './postcss.config.js'),
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            less: [
              'vue-style-loader',
              'css-loader',
              'less-loader?indentedSyntax',
            ],
          },
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'images/',
            },
          },
        ],
      },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
    ],
  },

};
