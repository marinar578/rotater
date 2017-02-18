var setHour = false;
var setMinute = false;

var date = new Date();
var dateVal = date.getDate();
var setDate = false;

$('#date').text(dateVal);

var year = new Date().getFullYear();
var month = new Date().getMonth() + 1;
var daysInMonth = new Date(year, month, 0).getDate();

$('#date').on('click', function(event){
    if (setDate == false) {
        setDate = true
    } else {
        setDate = false;
    }
});

$('#date').on('wheel', function(event){
    if (setDate) {
      if (event.originalEvent.deltaY < 0) {
        if (dateVal < daysInMonth) {
            dateVal += 1;
            $('#date').text(dateVal);         
        }
      } else {
        if (dateVal > 0) {
            dateVal -= 1;
            $('#date').text(dateVal);      
        }
      }
    }
});


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





