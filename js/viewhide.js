//This is a template from http://www.alohatechsupport.net/webdesignmaui/maui-web-site-design/show_hide_expand_collapse_javascript.html

$(document).ready(function() {
$('div.view').hide();
$('span.slide').click(function() {
$(this).next('div.view').slideToggle('fast');
return false;
});
});