const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [
       require('postcss-import'),
       require('tailwindcss'),
   ])
   .copyDirectory('resources/assets/images', 'public/images') // Adjusted directory name here

   .vue();

if (mix.inProduction()) {
    mix.version();
}
