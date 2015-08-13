var eventName = "";
var clickCounter = 0;
var deleteCounter = 0;
var orbitControlsCounter = 0;
var userStudy = true;
/*
deepCopy.movementCounter = 0; // How many times was it moved?
deepCopy.placedCounter = 0; // How many times was it falsely placed?
*/

$(document).click(function() {
    clickCounter++;
    // alert(clickCounter);
});

/* Timer */
var timeElapsed = 0;
var timer;
var timerIsOn = 0;

/* Timer functions */
function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e){
      return false;
    }
}

function timedCount() {
		document.getElementById('timer-value').innerHTML = timeElapsed;
		timeElapsed = timeElapsed + 1;
		t = setTimeout("timedCount()",1000);
}

function doTimer() {
    if (!timerIsOn) {
      timerIsOn = 1;
      timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timerIsOn = 0;

    /* Write all the data into the local storage */
    if(supportsLocalStorage()) {
      // Clear local storage
      // localStorage.clear();
      eventName = "timer";

      // Basic infos everytime a "changed" event is fired
      localStorage.setItem("timeStamp: " +  timeElapsed, eventName + ", " + "0" + ", " + "0" + ", " + "0" + ", " + ", " + clickCounter + ", " + deleteCounter + ", " + orbitControlsCounter);

      /*
      // Button values
      for(var i = phoneModelObjectCount; i < canvas.getObjects().length; i++) {
        localStorage.setItem(timeElapsed + ": " + canvas.item(i).buttonName + " - " +  i + " - movement", canvas.item(i).movementCounter);
        localStorage.setItem(timeElapsed + ": " + canvas.item(i).buttonName + " - " +  i + " - falsely placed", canvas.item(i).placedCounter);
      }
      */
    }
}

	/* User study
	if(userStudy) {

		function supportsLocalStorage() {
		  try {
		    return 'localStorage' in window && window['localStorage'] !== null;
		  } catch(e){
		    return false;
		  }
		}

		if(supportsLocalStorage()) {
			localStorage.setItem("clickCounter", 0);
		}

	}
*/
