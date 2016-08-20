module.exports = function(grunt) {

	grunt.initConfig({
		less: {
			dev: {
				files: {
					'looks.css':'style/assets.less'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-serve');
	grunt.loadNpmTasks('grunt-contrib-less');
};