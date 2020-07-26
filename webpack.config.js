const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    /* entry: (will add after folder structure created) */
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