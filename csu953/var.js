var prof = "Dr. Bharti Thakur";
var prof_bio = "<p>Bharti Thakur is an Assistant Professor at the Yogananda School of Artificial Intelligence, Computing and Data Science, Shoolini University of Biotechnology and Management Sciences, Solan (HP) India. She is doing her research on ‘Data Mining and Machine Learning’. She holds 10 years of teaching experience.</p>";
var prof_href = "mailto:bhartithakur@shooliniuniversity.com?subject=referred%20from%3A%20dmj.one";
var course = "CSU953";
var course_detail = "Front End Development Lab";

function get_menu_list() {
    var course = window.location.pathname.split("/")[1];
    var path = window.location.pathname.split("/")[2];
    var file = window.location.pathname.split("/")[3];

    if (path) {
        switch (path) {
            case "class":
                get_classes();
                break;
            case "books":
                get_books();
                break;
            default:
                break;
        }
    }
    else {
        get_main();
    }

    function get_main() {
        var cases = [1, 2, 3, 4, 5, 6];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "class";
                    date = "Thu September 27, 2022";
                    title = "Classes";
                    desc = "This contains list of classes";
                    codetype = "LABS";
                    readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 2:
                    link = "books";
                    date = "Thu September 27, 2022";
                    title = "Reference Books";
                    desc = "Learn where";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Classes for current " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
            }
        }
    }

    function get_classes() {
        var cases = [1, 2, 3, 4, 5, 6];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "c1";
                    date = "Thu September 27, 2022";
                    title = "Lab 1";
                    desc = "This is an introductory class";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 2:
                    link = "c2";
                    date = "Thu September 27, 2022";
                    title = "Lab 2";
                    desc = "Use of tags title, details, p, heading, and inline style of background-color.";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 3:
                    link = "c3";
                    date = "Thu September 27, 2022";
                    title = "Lab 3";
                    desc = "Use of tags tags sub, sup, text-align, address, and abbr.";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 4:
                    link = "c4";
                    date = "Thu September 27, 2022";
                    title = "Lab 4";
                    desc = "Class Test";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 5:
                    link = "c5";
                    date = "Thu September 27, 2022";
                    title = "Lab 5";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    codetype = "HTML";
                    readtime = "4";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 6:
                    link = "c6";
                    date = "Thu November 17, 2022";
                    title = "Lab 6";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    codetype = "HTML";
                    readtime = "5";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Classes for current " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
            }
        }
    }

    function get_books() {
        var cases = [1, 2, 3, 4, 5, 6];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "c1";
                    date = "Thu September 27, 2022";
                    title = "Lab 1";
                    desc = "This is an introductory class";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 2:
                    link = "c2";
                    date = "Thu September 27, 2022";
                    title = "Lab 2";
                    desc = "Use of tags title, details, p, heading, and inline style of background-color.";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 3:
                    link = "c3";
                    date = "Thu September 27, 2022";
                    title = "Lab 3";
                    desc = "Use of tags tags sub, sup, text-align, address, and abbr.";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 4:
                    link = "c4";
                    date = "Thu September 27, 2022";
                    title = "Lab 4";
                    desc = "Class Test";
                    codetype = "HTML";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 5:
                    link = "c5";
                    date = "Thu September 27, 2022";
                    title = "Lab 5";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    codetype = "HTML";
                    readtime = "4";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 6:
                    link = "c6";
                    date = "Thu November 17, 2022";
                    title = "Lab 6";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    codetype = "HTML";
                    readtime = "5";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Classes for current " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
            }
        }
    }

}
