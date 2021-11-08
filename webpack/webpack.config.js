// https://webpack.js.org/concepts/
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }, { loader: 'sass-loader' }] },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
