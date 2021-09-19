var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/public');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
    const isDev = options.mode !== 'production';
    return {
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
        plugins: [
            new MiniCssExtractPlugin({
                filename: isDev ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDev ? '[id].css' : '[id].[hash].css'
            })
        ],
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
                    test: /\.module\.s(a|c)ss$/,
                    use: [
                        { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: isDev
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDev
                            }
                        }
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module\.(s(a|c)ss)$/,
                    use: [
                        { loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader },
                        { loader: 'css-loader' },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDev
                            }
                        }
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
    }
};