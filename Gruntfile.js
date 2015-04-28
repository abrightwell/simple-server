module.exports = function(grunt) {
	grunt.initConfig({
		connect: {
			server : {
				options: {
					host: "*",
					port: 3000,
					base: 'www-root',
					keepalive: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
}
