module.exports = function(grunt) {

	// Init
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/blog.css': 'sass/blog.scss',
					'css/contact.css': 'sass/contact.scss',
					'css/home.css': 'sass/home.scss',
					'css/main.css': 'sass/main.scss',
					'css/normal.css': 'sass/normal.scss',
					'css/portfolio.css': 'sass/portfolio.scss',
					'css/work.css': 'sass/work.scss',
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: [
					'sass/*.scss'
				],
				tasks: ['sass']
			}
		}
	});

	// Load NPM Tasks
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register Tasks
	grunt.registerTask('default', ['watch']);	
};