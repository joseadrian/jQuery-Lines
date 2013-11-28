/*! jQuery Lines v1.0.2 | (c) 2013 Joseadrian Ochoa | http://github.com/joseadrian */
(function($){

  $.fn.lines = function(opts){
    opts = $.extend({ ellipsis: '' }, opts);
    
    return this.each(function(){
      var el = $(this),
          words = el.text().split(' '),
          totalWords = words.slice().length,
          line = [],
          lines = [],
          addLine = false;
      
      el.text('');
      
      while(words.length > 0) {
        var height = el.innerHeight(), word = words.shift(), width = 0;
        
        line.push(word); 
        el.text(line.join(' '));
        
        // No more words? Add last line
        if(words.length == 0){
          addLine = true;  
        }
        
        // Check if there are more than 2 lines
        if(height > 0 && el.innerHeight() > height) {
          addLine = true;
          words.unshift(line.pop());
        }
        
        if(addLine && line.length > 0) {
          line = { 
            text: line = line.join(' '),
            width: width = el.html('<span>' + line + '</span>').find('span').width()
          };
          
          lines.push(line);
          
          if(opts.onLine) {            
            var replace = opts.onLine.call(this, lines.length, line);
            typeof replace == "string" && (lines[lines.length-1].text = replace);
          }
          
          if(words.length > 0 && opts.truncate && opts.truncate == lines.length) {   
            // Remove last word
            lines[lines.length-1].text = line.text.split(' ').slice(0, -1).join(' ');
            opts.ellipsis = opts.ellipsis||'...';
            break;
          }
          
          // Clean for next line
          line = [];
        }
        
        addLine = false;
      }

      if(opts.replace && (_lines = opts.replace.call(this, lines))) {
        lines = _lines;
      }
      
      el.html($.map(lines, function(o, i){ return o.text; } ).join(' ') + opts.ellipsis||'');
    });
  }

})(jQuery);