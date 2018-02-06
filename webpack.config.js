const path = require('path')
const extractCss = require('extract-text-webpack-plugin')
const googleFonts = require('google-fonts-webpack-plugin')

module.exports = {

    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {

        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: extractCss.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 1000000,
                        name: '[hash].[ext]'
                    }
                }
            }
        ]


    },
    
    plugins: [
        new extractCss('css/[name].css')
    ]

}