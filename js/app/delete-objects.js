/* Delete objects when clicked on 'delete-item' */
$(document).ready(function() {

	$('#delete-item').click(function() {

		// When more then one element is selected
		if(canvas.getActiveGroup()){
	      canvas.getActiveGroup().forEachObject(function(o){ canvas.remove(o) });
	      canvas.discardActiveGroup().renderAll();
	    } else {
				/* User study */
				deleteCounter++;

				eventName = "delete";
				localStorage.setItem(eventName + " - " +  timeElapsed, canvas.getActiveObject().idf + ", " + canvas.getActiveObject().movementCounter + ", " + canvas.getActiveObject().placedCounter + ", " + clickCounter + ", " + deleteCounter + ", " + orbitControlsCounter);

	      canvas.remove(canvas.getActiveObject());
	      showMessage('Deleted selected button', showMessageBlue); // Show a delete massage
	    }


	    // Trigger an event when loaded
	    $.event.trigger({
	    	type: "modelChanged",
	    	time: new Date()
	    });

	});

});
