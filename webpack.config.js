//entry -> output
const path = require("path");

path.join(__dirname, "public");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test : /\.s?css$/,
        use : ["style-loader",
                  "css-loader",
                'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "public")
  },
  devtool: "cheap-module-eval-source-map"
};

//loader
