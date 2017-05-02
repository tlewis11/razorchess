let path = require('path');


let DIST_PATH = path.resolve(__dirname, 'dist');
let SOURCE_PATH = path.resolve(__dirname, 'app');

module.exports = {
    //file entry point
    entry: SOURCE_PATH + '/index.jsx',
    //output file
    output: {
        path: DIST_PATH,
        filename: 'index.dist.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }
};