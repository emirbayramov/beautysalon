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

mix.ts('resources/js/services.tsx', 'public/js')
    .ts('resources/js/settings.tsx', 'public/js')
    .ts('resources/js/orders.tsx', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin({
                configFile: 'tsconfig.json'
            })]
        },
        devtool: 'inline-source-map'
    });
