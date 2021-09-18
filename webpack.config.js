const isDev = process.env.NODE_ENV === 'development';
var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/public');
module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: [
        '@babel/polyfill', // enables async-await
        `${SRC_DIR}/index.js`
    ],
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            }
        ]
    }
};