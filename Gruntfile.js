module.exports = function(grunt) {

	grunt.initConfig({
		less: {
			dev: {
				files: {
					'looks.css':'style/assets.less'
				}
			}
		},
		nggettext_extract: {
			pot: {
				files: {
					'po/template.pot': ['*/**/*.html']
				}
			}
		},
		nggettext_compile: {
			all: {
				options: {
					module: 'myApp'
				},
				files: {
					'JS/translations.js': ['po/*.po']
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-angular-gettext');
};