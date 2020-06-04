const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const base = require('./webpack.base.conf.js');
const pkg = require('../package.json');

const copyright = [
    pkg.name,
    `@version v${pkg.version}`,
    `@author ${pkg.author}`,
    `@date ${Date.now()}`,
];

module.exports = merge(base, {
    mode: 'production',
    entry: './src/index.js',
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin({
            banner: copyright.join('\n'),
            entryOnly: true,
        }),
    ],
});
