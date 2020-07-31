const path = require('path');

module.exports = {
    mode: 'development',
    // watch: true,
    devtool: 'source-map',
    entry: path.join(__dirname, './client/index.js'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, './dist'),
      },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                },
                exclude: /(node_modules)/,
            },
        ],
    },
};