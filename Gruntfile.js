module.exports = function (grunt) {
    grunt.initConfig({
        shell: { /* grunt-shell */
            server: { /* Подзадача */
                command: 'java -cp L1.2-1.0-jar-with-dependencies.jar main.Main 7070'
                /* запуск сервера */
            }
        },
        fest: { /* grunt-fest */
            templates: { /* Подзадача */
                files: [{
                    expand: true,
                    cwd: 'templates', /* исходная директория */
                    src: '*.xml', /* имена шаблонов */
                    dest: 'public_html/js/tmpl' /* результирующая директория */
                }], 
	            template: function (data) { /* формат функции-шаблона */
	                return grunt.template.process(
	                    /* присваиваем функцию-шаблон переменной */
	                    'var <%= name %>Tmpl = <%= contents %> ;',
	                    {data: data}
	                );
	            }
            }
        },
        watch: { /* grunt-contrib-watch */
            fest: { /* Подзадача */
                files: ['templates/*.xml'], /* следим за шаблонами */
                tasks: ['fest'], /* перекомпилировать */
                options: {
                    atBegin: true /* запустить задачу при старте */
                }
            },
            server: { /* Подзадача */
                files: ['public_html/js/**/*.js'], /* следим за JS */
                options: {
                    livereload: true /* автоматическая перезагрузка */
                }
            }
        },
		concurrent: {
            target: ['watch', 'shell'], /* Подзадача */
            options: {
                    logConcurrentOutput: true, /* Вывод процесса */
            }
		}
    });
 
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-fest');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.registerTask('default', ['shell', 'watch']);
};
        





