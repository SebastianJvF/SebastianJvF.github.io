/* Delete objects when clicked on 'delete-item' */
$(document).ready(function() {

	$('#delete-item').click(function() {

		// When more then one element is selected
		if(canvas.getActiveGroup()){
	      canvas.getActiveGroup().forEachObject(function(o){ canvas.remove(o) });
	      canvas.discardActiveGroup().renderAll();
	    } else {
	      canvas.remove(canvas.getActiveObject());
	      showMessage('Deleted selected button', showMessageBlue); // Show a delete massage
	    }

			/* User study */
			deleteCounter++;
			// alert(deleteCounter);

	    // Trigger an event when loaded
	    $.event.trigger({
	    	type: "modelChanged",
	    	time: new Date()
	    });

	});

});
