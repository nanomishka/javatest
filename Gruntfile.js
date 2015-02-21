module.exports = function(grunt) {
    grunt.initConfig({
      concat: { /* Настройки задачи */ },
      any_other_name: 'hello' /* Любое произвольное свойство */
    });
};

// Загрузка плагинов, на примере "concat".
grunt.loadNpmTasks('grunt-contrib-concat');
// Определение задач, default должен быть всегда.
grunt.registerTask('default', ['concat']);
            



