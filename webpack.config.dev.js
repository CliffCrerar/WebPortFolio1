/**
 * long description for the file
 *
 * @summary Webpack configuration file
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-30 03:04:54 
 * Last modified  : 2018-06-27 18:27:41
 */

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ['url-loader?limit=10000&mimetype=application/font-woff'] },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ['file-loader'] },
            {
                test: /\.scss$/, use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            { test: /\.(png|svg|jpg|gif|jpeg)$/, use: ['file-loader'] },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            removeComments: true,
                            collapseWhitespace: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: 'Cliff Crerar Portfolio',
            favicon: './favicon.ico',
            meta: require('./json/meta.json')
        }),
        new webpack.DefinePlugin({

        })

    ]

}