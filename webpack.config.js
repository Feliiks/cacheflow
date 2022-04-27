module.exports = {
  entry: __dirname + '/frontend/src/App.jsx',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/preset-react", {"runtime": "automatic"}], 
            '@babel/preset-env'
          ],
          "plugins": [
            ["@babel/transform-runtime"],
            // new webpack.DefinePlugin({
            //   'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
            // }),
        ]
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
                limit: 1000
            }
          }
        ]
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/frontend/public',
  },
  resolve: {
    fallback: {
      "fs": false,
      "os": false,
      "path": false
    },
    alias: {
      process: "process/browser"
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
