
$(document).ready(function(){
  $("#front-end").click(function() {
    $("#front-showing").fadeToggle();
    $("#back-showing").hide();
  });
  $("#back-end").click(function() {
    $("#back-showing").fadeToggle();
    $("#front-showing").hide();
  });
  $("form#info").submit(function(event){
    const availability = parseInt($("input#hours-available").val());
    const pref = $("input:radio[name=preference]:checked").val();
    const personality = $("#personality-type").val();
    if(availability <= 0 || availability > 24){
      alert("Please enter a numnber between 1 and 24");
    }
    else if(!availability){
      alert("Please input only numbers");
    }

      }
      $("#answer").show();
    }
    event.preventDefault();
  });
});