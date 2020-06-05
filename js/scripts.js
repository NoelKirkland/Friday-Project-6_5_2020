// Buisness logic:
function multiply(hours, days) {
  return hours * days
}
function devide(mastery, resulta){
  return mastery / resulta
}

// User interface logic:
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
    const exp = $("#experience").val();
    const personality = $("#personality-type").val();

    const hours = parseInt($("input#hours-available").val());
    const days = parseInt($("input#days-available").val());
    const resulta = multiply(hours, days)
    const mastery = 1000
    const resultb = mastery / resulta

    // I just re-read the prompt and it actually says that I need FIVE survey questions, not THREE! I am panicking a little bit But I will do my best.

    // $("#output").text(resultb.toFixed());

    if(pref !== "front-end" && pref !== "back-end"){
      alert("please select one of the radio buttons")
    }
    else if(hours <= 0 || hours > 24){
      alert("Please enter a numnber between 1 and 24");
    }
    else if(!hours){
      alert("Please input only numbers");
    }
    else if(personality === "")
      alert("please select a personality type")
    else{

      if(pref === "front-end" && (exp === "None at all") && (personality === "Extroverted & Passive")){
        $("#match").text("HTML");
      }
      else if(pref === "front-end" && (exp === "None at all")) && (personality === "Extroverted & Aggressive")){
        $("#match").text("CSS");
      }
      else if(pref === "front-end" && (exp === "None at all") && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $("#match").text("JavaScript");
      }
      else if(pref === "front-end" && (exp === "A little bit") && (personality === "Extroverted & Passive")){
        $("#match").text("HTML as well as CSS");
      }
      else if(pref === "front-end" && (exp === "A little bit") && (personality === "Extroverted & Aggressive")){
        $("#match").text("CSS as well as Bootstrap");
      }
      else if(pref === "front-end" && (exp === "A little bit") && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $("#match").text("JavaScript as well as JQuery");
      }
      else if(pref === "front-end" && (exp === "A moderate amount") && (personality === "Extroverted & Passive" || personality === "Extroverted & Aggressive")){
        $("#match").text("HTML, CSS, and Bootstrap");
      }
      else if(pref === "front-end" && (exp === "A moderate amount") && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
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