const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
    entry: ['./src/app.js', './src/app.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        open: true,
        port: 8083,
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/public'
                }
            ]
        }),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production', // Disable during development
            test: /\.(jpe?g|png|gif|svg)$/i ,
            pngquant: {
                quality: '50-60'
              }
        
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'salon.html',
            template: './src/html/salon.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'examples.html',
            template: './src/html/examples.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpe?g|svg|bmp|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|otf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts'
                        }
                    }
                ]
            }
        ]
    }
}