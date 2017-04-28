var path = require('path');
var webpack = require("webpack");

var DIST_PATH = path.resolve( __dirname, 'dist' );
var SOURCE_PATH = path.resolve( __dirname, 'app' );

module.exports = {
    //file entry point
    entry: SOURCE_PATH + '/index.js',
    //output file
    output: {
        path: DIST_PATH,
        filename: 'index.dist.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'es2015',
                        'react',
                        'stage-2'
                    ]
                }
            }
        ]
    }
};