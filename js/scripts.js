
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

      if(pref === "front-end" && (availability >=1 && availability <=6) && (personality === "Extroverted & Passive")){
        $("#match").text("HTML");
      }
      else if(pref === "front-end" && (availability >=1 && availability <=6) && (personality === "Extroverted & Aggressive")){
        $("#match").text("CSS");
      }
      else if(pref === "front-end" && (availability >=1 && availability <=6) && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $("#match").text("JavaScript");
      }
      else if(pref === "front-end" && (availability >=7 && availability <=12) && (personality === "Extroverted & Passive")){
        $("#match").text("HTML as well as CSS");
      }
      else if(pref === "front-end" && (availability >=7 && availability <=12) && (personality === "Extroverted & Aggressive")){
        $("#match").text("CSS as well as Bootstrap");
      }
      else if(pref === "front-end" && (availability >=7 && availability <=12) && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $("#match").text("JavaScript as well as JQuery");
      }
      else if(pref === "front-end" && (availability >12) && (personality === "Extroverted & Passive" || personality === "Extroverted & Aggressive")){
        $("#match").text("HTML, CSS, and Bootstrap");
      }
      else if(pref === "front-end" && (availability >12) && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $("#match").text("JavaScript, JQuery, and React.js");
      }
      // this is the end of all "front-end" selections and the begining of all of the "back-end" selections
      else if(pref === "back-end" && (availability >=1 && availability <=6) && (personality === "Extroverted & Passive")){
        $("#match").text("PHP");
      }
      else if(pref === "back-end" && (availability >=1 && availability <=6) && (personality === "Extroverted & Aggressive")){
        $("#match").text("C++");
      }
      else if(pref === "back-end" && (availability >=1 && availability <=6) && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $("#match").text("Java");
      }
      else if(pref === "back-end" && (availability >=7 && availability <=12) && (personality === "Extroverted & Passive")){
        $("#match").text("PHP as well C++");
      }
      else if(pref === "back-end" && (availability >=7 && availability <=12) && (personality === "Extroverted & Aggressive")){
        $("#match").text("C++ as well as Python");
      }
      else if(pref === "back-end" && (availability >=7 && availability <=12) && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $("#match").text("Java as well as Node.js");
      }
      else if(pref === "back-end" && (availability >12) && (personality === "Extroverted & Passive" || personality === "Extroverted & Aggressive")){
        $("#match").text("PHP, C++, and Python");
      }
      else if(pref === "back-end" && (availability >12) && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $("#match").text("Java, Node.js, and Ruby");
      }
      else{
        $("#match").text("Doesn't fit and current chriteria");
      }
      $("#answer").show();
    }
    event.preventDefault();
  });
});