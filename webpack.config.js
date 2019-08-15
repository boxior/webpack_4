let path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js",
        publicPath: 'dist/',
    },
    devServer: {
        overlay: true //errors on page
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: '/node-modules/',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};

module.exports = (env, options) => {
    let isProduction = options.mode === 'production';

    conf.devtool = isProduction
        ? false //'source-map'
        : 'eval-sourcemap';

    return conf;
};