const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const DEBUG = process.env.NODE_ENV === 'production' ? false : true

module.exports = {
    
    entry: `${__dirname}/public/src/js/index.js`,

    output: {
        path: `${__dirname}/dist/js/`,
        publicPath: '/',
        filename: 'bundle.min.js'
    },

    module: {

        loaders: [
            {
                loader: 'babel-loader?sourceMap',
                exclude: /node_modules/,
                query: {
                    presets: [ 'react', 'es2015', 'stage-1' ],
                }
            },
            {
                test: /\.scss$/,
                loader: DEBUG ? 'style-loader!css-loader!sass-loader' 
                              : ExtractTextPlugin.extract({
                                    fallback: 'style-loader',
                                    use: 'css-loader!sass-loader'
                                })
            }
        ],

    },
    
    resolve: {
        extensions: [ '.js', '.jsx' ],
    },

    plugins: DEBUG ? [] : [
        new ExtractTextPlugin({filename: '../css/style.min.css',
            allChunks: true
        }),
        new UglifyJsPlugin({
            compress: { warnings: false },
            include: /\.min\.js$/
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.min\.css$/,
            cssProcessorOptions: { discardComments: { removeAll: true } }
        }),
    ],

    devtool: 'source-map',

    devServer: {
        hot: true, 
        publicPath: '/dist/js',
        contentBase: `${__dirname}/`,
        port: 3000,
        inline: true,
    }

}