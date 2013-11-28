jQuery-Lines
============
A jQuery plugin to play with lines...

Usage
=====

```
$('div').lines({
  onLine: function(lineNumber, text){
    return '<div>:: '+text+'</div>';
  }
  , replace: function(lines){ 
    lines[lines.length - 1] = lines[lines.length-1] + ' :the end:';
    return lines;
  }
  , truncate: 5
  , ellipsis: '...'
});
```
- **onLine**: it's called when the last word of a line is found. To replace, return a string.
- **replace**: it's calledwhen the last line is found. Optional: To replace, return an array of strings.
- **truncate**: To show X number of lines.
- **ellpsis**: To replace the dot notation at the end of all the text

[Demo](http://joseadrian.github.io/jQuery-Lines)
====
Some examples to play with text lines.

Copyright
=========
[MIT license](http://opensource.org/licenses/MIT) Copyright (c) 2013 Joseadrian Ochoa 