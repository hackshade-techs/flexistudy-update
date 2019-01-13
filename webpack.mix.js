const mix = require('laravel-mix');
const WebpackRTLPlugin = require('webpack-rtl-plugin');

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

// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');


mix.sass('resources/sass/frontend/app.scss', 'public/css/frontend.css')
    .sass('resources/sass/app.scss', 'public/css/vendor/bootstrap.css')
    .sass('resources/sass/backend/app.scss', 'public/css/backend.css')
    .sass('resources/sass/frontend/themes/blue.scss', 'public/css/themes/blue.css')
    .sass('resources/sass/frontend/themes/green.scss', 'public/css/themes/green.css')
    .sass('resources/sass/frontend/themes/grey.scss', 'public/css/themes/grey.css')
    .sass('resources/sass/frontend/themes/red.scss', 'public/css/themes/red.css')
    .sass('resources/sass/frontend/themes/olive.scss', 'public/css/themes/olive.css')
    .js([
        'resources/js/frontend/app.js',
        'resources/js/plugin/sweetalert/sweetalert.min.js',
        'resources/js/plugins.js'
    ], 'public/js/frontend.js')
    .js([
        'resources/js/backend/app.js',
        'resources/js/plugin/sweetalert/sweetalert.min.js',
        'resources/js/plugins.js'
    ], 'public/js/backend.js')
    .webpackConfig({
        plugins: [
            new WebpackRTLPlugin('/css/[name].rtl.css')
        ]
    });

if(mix.config.inProduction){
    // mix.version();
}
