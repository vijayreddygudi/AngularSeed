'use strict';

module.exports = {
    build: {
        files: [
            { '.build/index.html': 'src/index.html' }
        ]
    },
    temptobuild: {
        files: [
            {
                cwd     : '.tmp/concat/',
                src     : '**/*',
                dest    : '.build/',
                flatten : false,
                expand  : true
            }
        ]
    },
    templates: {
        files: [
            {
                cwd     : 'src/components/',
                src     : '**/*.html',
                dest    : '.build/tpl/',
                flatten : false,
                expand  : true
            }
        ]
    },
    images: {
        files: [
            {
                cwd     : 'src/img/dest/',
                src     : '**/*',
                dest    : '.build/img/',
                flatten : false,
                expand  : true
            }
        ]
    }
};