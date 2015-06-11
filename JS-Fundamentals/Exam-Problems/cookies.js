function solve(cookieLess){

    String.prototype.endsWith = String.prototype.endsWith || function(suffix) {
            return this.indexOf(suffix, this.length - suffix.length) >= 0;
        };

    String.prototype.startsWith = String.prototype.startsWith || function(prefix) {
            return this.indexOf(prefix) === 0;
        };


    var line, charIndex, currentLine;
    var cookieHas = [];
    var currentSelector;

    cookieHas.push(cookieLess[0]);

    for(line = 1; line <= cookieLess.length-1; line+=1){
        var currentLine = cookieLess[line];
        if(currentLine == undefined) {
            currentLine = '';
        }

        if(cookieLess[line-1].endsWith('{') && cookieLess[line+1].startsWith('}')){
            currentLine = '  ' + currentLine;
        }

        cookieHas.push(currentLine);
    }

    return cookieHas.join('\n');
}

var test1 = [ '.jedi {', 'has: lightsaber;', '}' ];
console.log(solve(test1));