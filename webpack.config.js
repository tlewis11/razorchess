let path = require('path');


let DIST_PATH = path.resolve(__dirname, 'dist');
let SOURCE_PATH = path.resolve(__dirname, 'app');

module.exports = {
    //file entry point
    entry: SOURCE_PATH + '/index',
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
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            }
            ,
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            }
            ,
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            }
            ,
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            }
            ,
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css'],
    }
    ,
}
;