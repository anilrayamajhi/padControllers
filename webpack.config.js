const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        index:  "./assets/main.js"
    },
    output: {
        path: path.resolve(__dirname, "js"),
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    drop_console: true,
                },
                mangle: {
                    keep_classnames: true,
                },
            }
        }),
    ]
};
