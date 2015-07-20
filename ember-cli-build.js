var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Any other options
    });

    app.import('bower_components/bootstrap/dist/js/bootstrap.js');
    app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff', {
			destDir: 'fonts'
		});
		app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff2', {
			destDir: 'fonts'
		});
		app.import('bower_components/fontawesome/fonts/fontawesome-webfont.ttf', {
			destDir: 'fonts'
		});
		app.import('bower_components/fontawesome/fonts/fontawesome-webfont.svg', {
			destDir: 'fonts'
		});


    return app.toTree();
};