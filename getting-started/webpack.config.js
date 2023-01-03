const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONFIG = {

    mode: 'development',

    entry: {
        app: './app.js'
    },

    plugins: [new HtmlWebpackPlugin({title: 'deck.gl example'})]

};

// module.exports = env => (env ? require('../../../webpack.config.local')(CONFIG)(env) : CONFIG);


module.exports = CONFIG;