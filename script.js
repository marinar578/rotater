
var setHour = false;
var setMinute = false;


$('.clock').on('click', function(event){
    if (!setHour && !setMinute) {
        console.log("Setting the hour hand.");
        setHour = true;
    } else if (setHour) {
        console.log("Setting the minute hand.");
        setHour = false;
        setMinute = true;
    } else if (setMinute) {
        console.log("Done setting the time");
        setMinute = false;
        clock();
    }
});

var hourDegree = 0;
var minuteDegree = 0;
var secondDegree = 0;

var minuteHand = $('#minute-hand');
var secondHand = $('#second-hand');
var hourHand = $('#hour-hand');

$('.clock').on('wheel', function(event){
    if (setHour) {
      if(event.originalEvent.deltaY < 0){
        hourDegree += 5;
        hourHand.css('transform', 'rotate('+hourDegree+'deg)');         
      }
      else {
        hourDegree -= 5;
        hourHand.css('transform', 'rotate('+hourDegree+'deg)');         
      }
    } else if (setMinute) {
      if(event.originalEvent.deltaY < 0){
        minuteDegree += 1;
        minuteHand.css('transform', 'rotate('+minuteDegree+'deg)');         
      }
      else {
        minuteDegree -= 1;
        minuteHand.css('transform', 'rotate('+minuteDegree+'deg)');         
      }
    }


});

var clock = function(){
    setInterval(function(){
        secondDegree+=1;
        secondHand.css('transform', 'rotate('+secondDegree+'deg)');
    },1000/6);

    setInterval(function(){
        minuteDegree+=1;
        minuteHand.css('transform', 'rotate('+minuteDegree+'deg)');     
    }, 60000/6);

    setInterval(function(){
        hourDegree+=1;
        hourHand.css('transform', 'rotate('+hourDegree+'deg)');         
    }, 3600000/30);

};






// set clock
// click clock once - set hour value = true
// set hour
// click clock a second time - set hour value = false, set minute value = true
// set minute
// click clock a third time - set minute value = false
