const mix = require('laravel-mix');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/index.tsx', 'public/js')
    .sass('resources/sass/app.css', 'public/css')
    .webpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin({
                configFile: 'tsconfig.json'
            })]
        },
        devtool: 'inline-source-map'
    });
