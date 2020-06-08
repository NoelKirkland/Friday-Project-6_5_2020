// Business logic:
function multiply(hours, days) {
  return hours * days
}
function devide(mastery, resulta){
  return mastery / resulta
}
// User interface:
$(document).ready(function(){
  $("#front-end").click(function() {
    $("#front-showing").fadeToggle();
    $("#back-showing").hide();
  });
  $("#back-end").click(function() {
    $("#back-showing").fadeToggle();
    $("#front-showing").hide();
  });
  $("form#info").submit(function (event){
    const pref = $("input:radio[name=preference]:checked").val();
    const exp = $("#experience").val();
    const personality = $("#personality-type").val();

    const hours = parseInt($("input#hours-available").val());
    const days = parseInt($("input#days-available").val());
    const resulta = multiply(hours, days)
    const mastery = 1000
    const resultb = mastery / resulta
      if(pref !== "front-end" && pref !== "back-end"){
        alert("please select one of the radio buttons")
      }
      else if(exp === ""){
        alert("Please select your previous experience")
      }
      else if(personality === ""){
        alert("please select a personality type")
      }
      else if(!hours || hours <= 0 || hours > 24){
        alert("Please enter your correct hours-per-day availability");
      }
      else if(!days || days <= 0 || days > 7){
        alert("Please enter your correct days-per-week availability")
      }
      else if(pref === "front-end" && (exp === "None at all") && (personality === "Extroverted & Passive")){
        $(".match").text("HTML");
      }
      else if(pref === "front-end" && (exp === "None at all") && (personality === "Extroverted & Aggressive")){
        $(".match").text("CSS");
      }
      else if(pref === "front-end" && (exp === "None at all") && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $(".match").text("JavaScript");
      }
      else if(pref === "front-end" && (exp === "A little bit") && (personality === "Extroverted & Passive")){
        $(".match").text("HTML and CSS");
      }
      else if(pref === "front-end" && (exp === "A little bit") && (personality === "Extroverted & Aggressive")){
        $(".match").text("CSS and Bootstrap");
      }
      else if(pref === "front-end" && (exp === "A little bit") && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $(".match").text("JavaScript and JQuery");
      }
      else if(pref === "front-end" && (exp === "A moderate amount") && (personality === "Extroverted & Passive" || personality === "Extroverted & Aggressive")){
        $(".match").text("HTML, CSS, and Bootstrap");
      }
      else if(pref === "front-end" && (exp === "A moderate amount") && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $(".match").text("JavaScript, JQuery, and React.js");
      }
      else if(pref === "back-end" && (exp === "None at all") && (personality === "Extroverted & Passive")){
        $(".match").text("PHP");
      }
      else if(pref === "back-end" && (exp === "None at all") && (personality === "Extroverted & Aggressive")){
        $(".match").text("C++");
      }
      else if(pref === "back-end" && (exp === "None at all") && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $(".match").text("Java");
      }
      else if(pref === "back-end" && (exp === "A little bit") && (personality === "Extroverted & Passive")){
        $(".match").text("PHP and C++");
      }
      else if(pref === "back-end" && (exp === "A little bit") && (personality === "Extroverted & Aggressive")){
        $(".match").text("C++ and Python");
      }
      else if(pref === "back-end" && (exp === "A little bit") && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $(".match").text("Java and Node.js");
      }
      else if(pref === "back-end" && (exp === "A moderate amount") && (personality === "Extroverted & Passive" || personality === "Extroverted & Aggressive")){
        $(".match").text("PHP, C++, and Python");
      }
      else if(pref === "front-end" && (exp === "A moderate amount") && (personality === "Introverted & Passive" || personality === "Introverted & Aggressive")){
        $(".match").text("Java, Node.js, and Ruby");
      }
      else{
        $(".match").text("Doesn't fit and current chriteria");
      }
      $("#answer").fadeIn();
      $("#hours-show").text(hours);
      $("#days-show").text(days);
      $("#output").text(resultb.toFixed());
      event.preventDefault();
  });
});