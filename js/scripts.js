
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
    const pref = $("input:radio[name=preference]:checked").val();
    const availability = parseInt($("input#hours-available").val());
    const personality = $("#personality-type").val();
    if(availability <= 0 || availability > 24){
      alert("Please enter a numnber between 1 and 24");
    }
    else if(!availability){
      alert("Please input only numbers");
    }
    else{

      if(pref === "front-end" && (availability >=1 || availability <=4) && (personality === "Extroverted & Passive")){
        $("#match").text("HTML");
      }

      $("#answer").show();
    }
    event.preventDefault();
  });
});