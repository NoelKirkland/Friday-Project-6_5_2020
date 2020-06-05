
$(document).ready(function(){
  $(".front-end").click(function() {
    $("#front-showing").fadeIn();
    $("#back-showing").hide();
  });
  $(".back-end").click(function() {
    $("#back-showing").fadeIn();
    $("#front-showing").hide();
  });

    event.preventDefault();
  });
});