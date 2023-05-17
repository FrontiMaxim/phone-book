const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }, 
        port: 9000,
        compress: true
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader', 
                    'css-loader', 
                ]
            }
        ]
    }
}