//This is a template from https://css-tricks.com/rethinking-dynamic-page-replacing-content/

$(function() {
    if(Modernizr.history){
        
    $("nav").delegate("a", "click", function() {

      _href = $(this).attr("href");

      history.pushState(null, null, _href);

      loadContent(_href); 
        
    });
        
    } else {
       
    }
    
});

var $mainContent = $("#main-content"),
    $pageWrap    = $("#page-wrap"),
    baseHeight   = 0,
    $el;


$pageWrap.height($pageWrap.height());
baseHeight = $pageWrap.height() - $mainContent.height();

function loadContent(href) {

  $mainContent
    .find("#guts")
    .fadeOut(200, function() { 
      $mainContent
        .hide()
        .load(href + " #guts", function() { /
          $mainContent.fadeIn(200, function() {
            $pageWrap.animate({
              height: baseHeight + $mainContent.height() + &quot;px&quot;
            });
         });
      
      $("nav a").removeClass("current");

      $("nav a[href$='" + href + "']").addClass("current");

    });

  });

}

$(window).bind("popstate", function() {
    link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
    loadContent(link);
});

