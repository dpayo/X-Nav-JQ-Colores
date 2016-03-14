// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {

  $("#orderedlist li").each(function(){
    $(this).click(function(){
        $(this).addClass("red")
    })

  })
  $("#orderedlist2 li").each(function(){
    $(this).hover(function(){
      $(this).addClass("red")},function(){
      $(this).removeClass("red")
    });
  });
    $("#faq dt").click(function() {
	$(this).fadeOut("slow");
    });
    $("h3").click(function() {
	$("dt").fadeIn("slow");
    });
 
  $("#large").click(function(){
    $(this).addClass("green")
    });

  $("#faq dd").hover(function(){
    $(this).css("background-color", "blue")}, function(){
    $(this).css("background-color", "pink");
  });
});
