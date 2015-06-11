(function () {
    'use strict';

    console.log('\n\nProblem 8. Replace tags');

    function replaceATag(str) {
        var re = /<a([\w\W]*)>([\w\W]*)<\/a>/gi;
        return str.replace(re, '[URL $1]$2[/URL]');
    }

    var exampleInput = '<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>';
    console.log(replaceATag(exampleInput));
}());