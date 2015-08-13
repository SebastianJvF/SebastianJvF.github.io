/* DRAG AND DROP */
/* Dragend - event $(document).bind('dragend', function(){ console.log("Dragend"); }); */
/* Dragging workaround: set variable to true when clicked on link and check on mouse up */
function createDraggableObject(fabricObject, buttonName) {
	var middleRect, leftRect, rightRect, topRect, bottomRect, cameraHole;
	var draggingStarted = false;

	/* Create a deep copy of the object to be able to add multiple elements */
	var deepCopy =  $.extend({}, fabricObject);

	$('#' + buttonName).mousedown(function() {
		draggingStarted = true;

		/* Change mouse cursor while dragging */
		$("nav").css('cursor', 'copy');
		$("div").css('cursor', 'copy');
		$("a").css('cursor', 'copy');
		canvas.defaultCursor = 'copy';

		$("#fire-dragend").mouseup(function(e) {
			if(draggingStarted == true) {
				console.log("Mouseup");
				draggingStarted = false;

				/* Change mouse cursor back as we're done dropping */
				$("nav").css('cursor', 'auto');
				$("div").css('cursor', 'auto');
				$("a").css('cursor', 'auto');
				canvas.defaultCursor = 'auto';

				/* Disable scaling */
				deepCopy.lockScalingX = deepCopy.lockScalingY = true;
				deepCopy.setControlsVisibility({
				    mt: false,
				    mb: false,
				    ml: false,
				    mr: false,
				    bl: false,
				    br: false,
				    tl: false,
				    tr: false,
				    mtr: true // Enable rotation
				});

				/* Get mouse position on canvas */
				var offset = $("#fire-dragend").offset();
				var mouseCoordinates = {'x': e.pageX-offset.left, 'y': e.pageY-offset.top};

				/* Add object */
				canvas.add(deepCopy);
				showMessage("Added button", showMessageBlue);

				/* Set coordinates */
				deepCopy.setTop(mouseCoordinates.y);
				deepCopy.setLeft(mouseCoordinates.x);

				/* Let element be further moved */
				deepCopy.setCoords();
				canvas.renderAll();

				/* Check, on which side the button was placed */
				if(deepCopy.isContainedWithinObject(canvas.item(0))) { deepCopy.contained = 0; }
				else if(deepCopy.isContainedWithinObject(canvas.item(1))) { deepCopy.contained = 1; }
				else if(deepCopy.isContainedWithinObject(canvas.item(2))) { deepCopy.contained = 2; }
				else if(deepCopy.isContainedWithinObject(canvas.item(3))) { deepCopy.contained = 3; }
				else if(deepCopy.isContainedWithinObject(canvas.item(4))) { deepCopy.contained = 4; }
				else { deepCopy.contained = 6; }
				deepCopy.buttonName = buttonName;
				deepCopy.correctlyPlaced = true;

				/* User study */
				deepCopy.movementCounter = 0;
				deepCopy.placedCounter = 0;

				// Trigger an event when loaded
				$.event.trigger({
					type: "modelChanged",
					time: new Date()
				});

				/* Create a new deep copy to empty the old one */
				deepCopy =  $.extend({}, fabricObject);
			}
		});

		/* To end mousedown event right afterwards */
		return false;
	});
}

function addButtonAction(url, id) {
	var group = [];
	var loadedObjects;

	fabric.loadSVGFromURL(

	        	url,

	        	function(objects, options) {
	            	loadedObjects = new fabric.Group(group);
	            	createDraggableObject(loadedObjects, id);
	            },

	            function(item, object) {
	                object.set('id', item.getAttribute('id'));
	                group.push(object);
	            }
	);
}
