var path = require('path');
module.exports = {
    entry: {
        app: './server/app.js'
    },
    target: 'node',
    output: {
        path: path.resolve('./dist'),
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        alias: {
            config: path.resolve(__dirname, './webpack.config')
        }
    }
};