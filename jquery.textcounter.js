/*!
 jQuery Textcounter v1.0.0 - 2014-05-28
 (c) 2014 Dirk Diebel - https://github.com/ddiebel/jquery-textcounter
 license: http://www.opensource.org/licenses/mit-license.php
 */
(function ( $ ) {
    $.fn.countChars = function(options) {
    // settings
        var settings = $.extend( {
            maxLength : parseInt($(this).attr('maxlength'))
        }, $.fn.countChars.defaults, options );

    // onkeyup
        this.keyup(function(){
            var remaining = settings.maxLength - $(this).val().length;
            $(settings.counterElement).text(remaining);
        });
        return this;
    };
    $.fn.countChars.defaults = {
        counterElement : "#textareacount"
    }
}( jQuery ));