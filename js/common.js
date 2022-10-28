/* 
 * This file contains all the js combined.
 */

// Verify If jquery is loaded
window.jQuery || document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>');

// Footer Copyright
function copyright() {
    document.write('&copy; 2007-' + new Date().getFullYear() + ' Divya Mohan');
}

// Decode Encrypted Variable's - Call this function to decode variables.
// Example: execute the vars by calling <script>decenv(_varname_);</script> in html where it is required.
// abbr: DeCodeEncryptedVAr - dcevar
function dcevar(s) {
    var s1 = decodeURIComponent(s.substr(0, s.length - 1));
    var t = '';
    for (i = 0; i < s1.length; i++) t += String.fromCharCode(s1.charCodeAt(i) - s.substr(s.length - 1, 1));
    var decoded = decodeURIComponent(t);
    document.write(decoded);
}


//plugins.js code:
// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


// Privacy - I accept
(function ($) {
    $('.i-accept').on('click', function () {
        if (localStorage.noshow !== '1') {
            $('#cookie-notice').addClass('d-none');
            localStorage.noshow = '1';
        }
    });
    if (localStorage.noshow == '1') {
        $('#cookie-notice').addClass('d-none');
    };
})(jQuery);

