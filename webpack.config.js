const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    },
    optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: true,
    }),
    ],
    module: {
    rules: [
        {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        },
    ],
    },
};