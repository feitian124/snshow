var page = require('webpage').create();
page.open('http://ruby-china.org', function () {
    page.render('github.png');
    phantom.exit();
});
