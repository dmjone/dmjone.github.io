/* 
 * This file contains all the js combined.
 */

var main = document.getElementById('main');

// Verify If jquery is loaded
window.jQuery || document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>');


/******** Header ***********/

// Get current URL
function header_nav() {
    var url = new URL(window.location.href);
    var nav_folder = url.pathname.split("/")[1];
    var nav_filename = url.pathname.substring(url.pathname.lastIndexOf('/') + 1);

    var navv = window.location.pathname.split("/")[1];
    console.log(url.hostname);
    console.log(nav_folder);
    console.log(nav_filename);
    console.log(navv);

    var nav_home = '<a href="https://' + url.hostname + ' " data-toggle="tooltip" data-placement="top" title="Home" data-original-title="Home"><i class="bi bi-house-fill text-light"></i></a>';
    var nav_path = '<a href="/' + nav_folder + '"><i class="bi bi-journals text-light"></i></a>';
    var nav_file = '<a href="' + nav_filename + '"><i class="bi bi-journal-code text-light"></i></a>';

    var list_start = '<nav aria-label="breadcrumb" class="navbar-brand text-light"><ol class="breadcrumb" style="margin:auto">';
    var list_home = '<li class="breadcrumb-item">' + nav_home + '</li>';
    var list_path = '';
    var list_close = '</ol></nav>';

    if (nav_folder) {
        var list_path = '<li class="breadcrumb-item">' + nav_path + '</li >';
    }
    if (nav_filename) {
        var list_path = '<li class="breadcrumb-item">' + nav_path + '</li><li class="breadcrumb-item active" aria-current="page">' + nav_file + '</li>';
    }
    return (list_start + list_home + list_path + list_close);
}

function header_navbar() {
    var common_nav_start = '<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top mw-100 px-3 py-3 shadow-lg"><div class="container-fluid"><script>document.write(header_nav())</script><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto">';
    var common_nav_end = '</ul><!--- <form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-light" type="submit">Search</button></form> --></div></div></nav>';

    var li_link = "";
    var path = window.location.pathname;
    var folder = window.location.pathname.split("/")[1];
    var alreadyactive = 0;
    var links = ["csu1128p", "csu1128", "csu953", "fsu030", "csu730", "csu951"];
    links.sort();
    for (let i = 0; i < links.length; i++) {
        if (links[i] != folder) {
            var linkactive = '"';
        } else {
            var linkactive = ' active" aria-current="page"';
        }
        linkname = links[i].toUpperCase();
        li_link += '<li class="nav-item"><a class="nav-link' + linkactive + ' href="/' + links[i] + '">' + linkname + "</a></li>";
    }

    nav = common_nav_start + li_link + common_nav_end;
    return nav;
}

function header_author(author_init) {
    /* USAGE - header_author(include_course_name, define_is_lab, teacher_FL, author_FL, biblography, button)
     * FL - First and Last Name initials 
     * Example: header_author(1, 0, "pv", "dm", 0, 1) / header_author(1, 0, "bt", "vn", 1, 1) :: 1 - display | 0 - Not Display 
    */
    //  get the actual author and professor name

    var folder = window.location.pathname.split("/")[1];
    var file = window.location.pathname.split("/")[2];
    console.log(folder.length + folder);
    console.log(file.length + file);

    switch (folder) {
        case "csu1128":
            var prof = "Dr. Pankaj Vaidya";
            var prof_bio = "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>";
            var prof_href = "mailto:pankaj.vaidya@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one";
            var course = "CSU1128";
            var course_detail = "Logic Building with Computer Programming";
            break;
        case "csu1128p":
            var prof = "Dr. Pankaj Vaidya";
            var prof_bio = "<p>Dr. Pankaj Vaidya is the Head of the Yogananda School of AI, Computers and Data Sciences. He holds 22 years of teaching experience and is conducting research in Machine Learning and Drug Discovery using Machine Learning. He completed his M Tech (2005) and received PhD (2020) in Computer Science Engineering from Shoolini University.</p>";
            var prof_href = "mailto:pankaj.vaidya@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one";
            var course = "CSU1128(P)";
            var course_detail = "Logic Building with Computer Programming Lab";
            break;
        case "csu953":
            var prof = "Dr. Bharti Thakur";
            var prof_bio = "<p>Bharti Thakur is an Assistant Professor at the Yogananda School of Artificial Intelligence, Computing and Data Science, Shoolini University of Biotechnology and Management Sciences, Solan (HP) India. She is doing her research on ‘Data Mining and Machine Learning’. She holds 10 years of teaching experience.</p>";
            var prof_href = "mailto:bhartithakur@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one";
            var course = "CSU953";
            var course_detail = "Front End Development Lab";
            break;
        case "fsu030":
            var prof = "Dr. Pawan Kumar";
            var prof_bio = "<p>Dr. Pawan Kumar is a assistant Professor at Shoolini University. He has more than 17 years of experience in teaching, research, and administration. He completed his Ph.D.in 2019 from Amity University, Noida with the collaboration of Punjab University, Chandigarh. He is currently working on Optical, Thermal and Electrical Properties of Chalcogenide Glasses/Thin Films.</p>";
            var prof_href = "mailto:pawankumarsu783@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one";
            var course = "FSU030";
            var course_detail = "Engineering Physics";
            break;
        case "csu951":
            var prof = "Dr. Ravinder Thakur";
            var prof_bio = "<p>Dr. Ravinder Thakur is an assistant professor at Shoolini University.</p>";
            var prof_href = "mailto:contact@dmj.one?subject=Want%20to%20contact%20Dr.%20Ravinder%20Thakur&body=Hello%2C%20I%20want%20to%20contact%20Dr.%20Ravinder%20Thakur.%20Please%20provide%20his%20contact%20details.%0AThanks";
            var course = "CSU951";
            var course_detail = "Basic Mathematics";
            break;
        case "csu730":
            var prof = "Rajesh Williams";
            var prof_bio = "<p>Rajesh Williams is an English Language professional from Faculty of Liberal Arts.</p>";
            var prof_href = "mailto:contact@dmj.one?subject=Want%20to%20contact%20Dr.%20Ravinder%20Thakur&body=Hello%2C%20I%20want%20to%20contact%20Rajesh%20Williams.%20Please%20provide%20his%20contact%20details.%0AThanks";
            var course = "CSU730";
            var course_detail = "Functional English - 1";
            break;
        default:
            break;
    }
    switch (author_init) {
        case "dm":
            var author = "Divya Mohan";
            var author_bio = "<p>Divya Mohan is a student from India currently pursuing his B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>";
            var author_href = "mailto:contact@dmj.one";
            break;
        case "vp":
            var author = "Vanshika Painuly";
            var author_bio = "<p>Vanshika Painuly is a student from Uttrakhand, India currently pursuing her B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>";
            var author_href = "mailto:vp@dmj.one";
            break;
        default:
            var author = "Divya Mohan";
            var author_bio = "<p>Divya Mohan is a student from India currently pursuing his B. Tech in Computer Science and Engineering. This summary is designed to give the learners easy access to the learning techniques of the concepts in the simplest forms of chunks.</p>";
            var author_href = "mailto:contact@dmj.one";
            break;
    }

    var row_button_start = '<div class="row" style="padding-bottom:30px;">';
    var row_button_end = "</div>";
    // Just write the content in the vars
    var csu1128_button = '<div class="col"><a href="/' + course.toLowerCase() + '/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="' + course_detail + '">' + course + '</button></a></div>';
    var csu1128p_button = '<div class="col"><a href="/' + course.toLowerCase() + 'p/"><button type="button" class="btn btn-light w-100" data-toggle="tooltip" data-placement="top" title="' + course_detail + '!">' + course + '(P)</button></a></div>';
    var fsu030_button = "";
    var csu953_button = "";


    switch (course) {
        case "CSU1128":
            var button = row_button_start + csu1128_button + csu1128p_button + row_button_end;
            break;
        case "CSU1128(P)":
            var button = row_button_start + csu1128_button + csu1128p_button + row_button_end;
            break;
        case "FSU030":
            var button = row_button_start + fsu030_button + row_button_end;
            break;
        case "CSU953":
            var button = row_button_start + csu953_button + row_button_end;
        default:
            var button = "";
            break;
    }

    var profname = "<strong>" + prof + "</strong> ";
    var prof_link = '<a href="' + prof_href + '" data-toggle="tooltip" data-placement="top" title="Get in touch with ' + prof + '" data-original-title="Get in touch with ' + prof + '"><i class="bi bi-envelope-plus text-light"></i></a>';

    var authorname = "<strong>" + author + "</strong> ";
    var author_link = '<a href="' + author_href + '" data-toggle="tooltip" data-placement="top" title="Get in touch with ' + author + '" data-original-title="Get in touch with ' + author + '"><i class="bi bi-envelope-plus text-light"></i></a>';

    if (file.length != 0) {
        var prof_bio = "";
        var author_bio = "";
    }

    course = "<h1>" + course + " (" + course_detail + ")</h2>";


    document.write("<header>" + course + "<p>Summarized by " + authorname + author_link + " under the guidance of " + profname + prof_link + "</p>" + prof_bio + author_bio + button + "</header>" + header_navbar());
}

/******** Body ***********/
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
// For better compatiblity of vars and var usage spelling mistake
function dcevars(s) {
    var s1 = decodeURIComponent(s.substr(0, s.length - 1));
    var t = '';
    for (i = 0; i < s1.length; i++) t += String.fromCharCode(s1.charCodeAt(i) - s.substr(s.length - 1, 1));
    var decoded = decodeURIComponent(t);
    document.write(decoded);
}


function body_blocks() {
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    
    
        
    

}

// Footer Codes


//document.getElementsByTagName("footer").append(copyright("all"));

// document.body.append(dcevar(notify_cookie));

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


/******** Footer ***********/
function copyright(rights) {
    var footer_all_rights = ' &#8226; All rights reserved';
    var footer_some_rights = ' &#8226; Some rights reserved';
    var footer_link_privacy = ' &#8226; <a href="/privacy">Privacy</a>';
    var footer_link_tos = ' &#8226; <a href="/tos">Terms and Conditions</a>';

    if (rights == "all") {
        var rights = footer_all_rights;
    } else if (rights == "some") {
        var rights = footer_some_rights;
    } else { rights = ""; }

    document.write('<footer><span>&copy; 2007-' + new Date().getFullYear() + ' Divya Mohan' + rights + footer_link_privacy + footer_link_tos + '</span></footer>');

    // Notification cookie
    dcevar(notify_cookie);

    // Notification - Privacy - I accept
    $('.i-accept').on('click', function () {
        if (localStorage.noshow !== '1') {
            $('#cookie-notice').addClass('d-none');
            localStorage.noshow = '1';
        }
    });
    if (localStorage.noshow == '1') {
        $('#cookie-notice').addClass('d-none');
    };

    // Syntax highlighter - Enable is using highlight js.
    hljs.highlightAll();
}
