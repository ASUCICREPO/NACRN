var webpack = require('webpack');

const jquery = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
})

module.exports = jquery;