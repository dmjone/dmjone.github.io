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
        //        var cases = [1];
        var cases = [1];
        for (let i = 0; i < cases.length; i++) {
            switch (cases[i]) {
                case 1:
                    link = "class";
                    date = "Thu September 27, 2022";
                    title = "Programs done in Class";
                    desc = "This contains list of programs written in C language done in class.";
                    codetype = "C Programming";
                    readtime = "10";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 2:
                    link = "books";
                    date = "Thu September 27, 2022";
                    title = "Reference Books";
                    desc = "Learn where";
                    // codetype = "HTML";
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
        var cases = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        for (let i = 0; i < cases.length; i++) {
            var codetype = "C Language";
            var d = i + 1;
            var link = "c" + d;
            var title = "Program " + d;
            var readtime = Math.floor(Math.random() * 5) + 2;
            switch (cases[i]) {
                case 1:
                    // link = "add_link like 'c2' ";
                    date = "Mon November 21, 2022";
                    // title = "Program 31 / title += 'append something' ";
                    desc = "To print a loop which prints a triangle";
                    // codetype = "replace here with custom var";
                    // readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 2:
                    date = "Thu September 27, 2022";
                    desc = "To print a loop which prints a triangle in top down order.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 3:
                    date = "Thu September 27, 2022";
                    desc = "Use of tags tags sub, sup, text-align, address, and abbr.";
                    codetype = "HTML";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 4:
                    date = "Thu September 27, 2022";
                    desc = "Class Test";
                    codetype = "HTML";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 5:
                    date = "Thu September 27, 2022";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 6:
                    date = "Thu November 17, 2022";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 7:
                    date = "Mon November 21, 2022";
                    desc = "To print a loop which prints a triangle";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 8:
                    date = "Thu September 27, 2022";
                    desc = "To print a loop which prints a triangle in top down order.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 9:
                    date = "Thu September 27, 2022";
                    desc = "Use of tags tags sub, sup, text-align, address, and abbr.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 10:
                    date = "Thu September 27, 2022";
                    desc = "Class Test";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 11:
                    date = "Thu September 27, 2022";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 12:
                    date = "Thu November 17, 2022";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 13:
                    date = "Mon November 21, 2022";
                    desc = "To print a loop which prints a triangle";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 14:
                    date = "Thu September 27, 2022";
                    desc = "To print a loop which prints a triangle in top down order.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 15:
                    date = "Thu September 27, 2022";
                    desc = "Use of tags tags sub, sup, text-align, address, and abbr.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 16:
                    date = "Thu September 27, 2022";
                    desc = "Class Test";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 17:
                    date = "Thu September 27, 2022";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 18:
                    date = "Thu November 17, 2022";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 19:
                    date = "Mon November 21, 2022";
                    desc = "To print a loop which prints a triangle";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 20:
                    date = "Thu September 27, 2022";
                    desc = "To print a loop which prints a triangle in top down order.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 21:
                    date = "Thu September 27, 2022";
                    desc = "Use of tags tags sub, sup, text-align, address, and abbr.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 22:
                    date = "Thu September 27, 2022";
                    desc = "Class Test";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 23:
                    date = "Thu September 27, 2022";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 24:
                    date = "Thu November 17, 2022";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 25:
                    date = "Mon November 21, 2022";
                    desc = "To print a loop which prints a triangle";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 26:
                    date = "Thu September 27, 2022";
                    desc = "To print a loop which prints a triangle in top down order.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 27:
                    date = "Thu September 27, 2022";
                    desc = "Use of tags tags sub, sup, text-align, address, and abbr.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 28:
                    date = "Thu September 27, 2022";
                    desc = "Class Test";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 29:
                    date = "Thu September 27, 2022";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 30:
                    date = "Thu November 17, 2022";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 31:
                    date = "Mon November 21, 2022";
                    desc = "To print a loop which prints a triangle";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1, "vp");
                    break;
                case 32:
                    date = "Thu September 27, 2022";
                    desc = "To print a loop which prints a triangle in top down order.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 33:
                    date = "Thu September 27, 2022";
                    desc = "Use of tags tags sub, sup, text-align, address, and abbr.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 34:
                    date = "Thu September 27, 2022";
                    desc = "Class Test";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 35:
                    date = "Thu September 27, 2022";
                    desc = "Use of table, tr, th tags in creation of Tables";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 36:
                    date = "Thu November 17, 2022";
                    desc = "VIVA based on questions directed towards odd and even students.";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Classes for current course " + course + " has not been defined.";
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
                    codetype = "BOOKS";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                case 2:
                    link = "c2";
                    date = "Thu September 27, 2022";
                    title = "Lab 2";
                    desc = "Use of tags title, details, p, heading, and inline style of background-color.";
                    codetype = "BOOK2";
                    readtime = "2";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
                default:
                    link = "#";
                    date = "Not Applicable";
                    title = "Books for current " + course + " has not been defined.";
                    desc = "Please define a hierchy for the classes of course " + course + ".";
                    codetype = "#CourseNotDefined";
                    readtime = "0";
                    body_blockcards(link, date, title, desc, codetype, readtime, 1);
                    break;
            }
        }
    }
}