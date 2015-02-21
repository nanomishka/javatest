module.exports = function (grunt) {
    grunt.initConfig({
        shell: { /* grunt-shell */
            server: { /* Подзадача */
                command: 'java -cp L1.2-1.0-jar-with-dependencies.jar main.Main 7070'
                /* запуск сервера */
            }
        } 
    });
 
    grunt.loadNpmTasks('grunt-shell');
    //grunt.registerTask('default', ['concat']);
};
        





