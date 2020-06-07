let mix = require('laravel-mix');

mix.setPublicPath('src')
	.sass('src/scss/theme.scss', 'src/css')
	.sass('src/scss/theme-blue-light.scss', 'src/css')
	.sass('src/scss/theme-blue-dark.scss', 'src/css')
	.sass('src/scss/theme-dark.scss', 'src/css');

/*mix.setPublicPath('public')
	.sass('src/scss/theme.scss', 'css')
	.sass('src/scss/theme-blue-light.scss', 'css')
	.sass('src/scss/theme-blue-dark.scss', 'css')
	.sass('src/scss/theme-dark.scss', 'css')
	.combine([
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/popper.js/dist/popper.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
		'node_modules/sweetalert2/dist/sweetalert2.min.js',
		'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js'
	], 'public/js/theme.core.js');*/

// Options

mix.options({
    processCssUrls: false
});


// Live reload

mix.browserSync({
	browser: 'Google Chrome',
	proxy: false,
	server: {
		baseDir: './',
	},
	files: [
        '**/*.html',
        '**/*.js',
        '**/*.css'
    ]
});


// Production settings

if (mix.inProduction()) {

}
