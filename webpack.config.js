module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },
  externals: {
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devtool: "source-map"
};
