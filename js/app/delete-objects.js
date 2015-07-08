/* Delete objects when clicked on 'delete-item' */
$(document).ready(function() {

	$('#delete-item').click(function() {
		
		if(canvas.getActiveGroup()){
	      canvas.getActiveGroup().forEachObject(function(o){ canvas.remove(o) });
	      canvas.discardActiveGroup().renderAll();
	    } else {
	    
	      canvas.remove(canvas.getActiveObject());
	      showMessage('Deleted selected button', showMessageBlue); // Show a delete massage
	    }
	   
	});

});