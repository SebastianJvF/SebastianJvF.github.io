/* CREATE CANVAS */
var canvas = new fabric.Canvas('two-d-panel');
var controlColor = '#000000';
		
/** 2D PHONE MODEL **/
var modelStrokeWidth = 2;
var modelColor = '#ffffff';
var modelStrokeColor = '#c3bfbf';

var middleRect = new fabric.Rect({
		top : 110,
		left : 185,
		width : 200,
		height : 280,
		fill : modelColor,
		strokeWidth : modelStrokeWidth,
		stroke: modelStrokeColor
});
	
var leftRect = new fabric.Rect({
		top : 110,
		left : 115,
		width : 50,
		height : 280,
		fill : modelColor,
		strokeWidth : modelStrokeWidth,
		stroke: modelStrokeColor
});

var rightRect = new fabric.Rect({
		top : 110,
		left : 405,
		width : 50,
		height : 280,
		fill : modelColor,
		strokeWidth : modelStrokeWidth,
		stroke: modelStrokeColor
});
	
var topRect = new fabric.Rect({
		top : 40,
		left : 185,
		width : 200,
		height : 50,
		fill : modelColor,
		strokeWidth : modelStrokeWidth,
		stroke: modelStrokeColor
});
	
var bottomRect = new fabric.Rect({
		top : 410,
		left : 185,
		width : 200,
		height : 50,
		fill : modelColor,
		strokeWidth : modelStrokeWidth,
		stroke: modelStrokeColor
});

canvas.add(middleRect);
canvas.add(leftRect);
canvas.add(rightRect);
canvas.add(topRect);
canvas.add(bottomRect);
	
/* Make mock-up unselectable */
canvas.item(0).selectable = false;
canvas.item(1).selectable = false;
canvas.item(2).selectable = false;
canvas.item(3).selectable = false;
canvas.item(4).selectable = false;

/* Allow rotation only in 90-degree-increments */
var closestAngle = 0;
var snap = false;

function roundAngle(fabricObj) {
	var currentAngle = fabricObj.angle; // get angle of the currently selected Object
	var normalizedAngle = Math.abs(Math.round(Math.asin(Math.sin(currentAngle * Math.PI/360.0)) * 360.0/Math.PI)); // Normalize the angle
	snap = true;
	
	if (normalizedAngle >= 45 && normalizedAngle < 135) {
		console.log(normalizedAngle + " - snap to: 90");
		return 90;
	} else if (normalizedAngle >= 135 && normalizedAngle < 225) {
		console.log(normalizedAngle + " - snap to: 180");
		return 180;
	} else if (normalizedAngle >= 225 && normalizedAngle < 315) {
		console.log(normalizedAngle + " - snap to: 270");
		return 270;
	} else if ((normalizedAngle >= 315 && normalizedAngle <= 360) || (normalizedAngle >= 0 && normalizedAngle < 45)) {
		console.log(normalizedAngle + " - snap to: 0");
		return 0;
	}
	
	return currentAngle;
}

/* When rotating, use roundAngle to round angle to  */
canvas.on("object:rotating", function(rotEvtData) {
	var fabricObj = rotEvtData.target;
	closestAngle = roundAngle(fabricObj);
});

canvas.on("object:modified", function(modEvtData) {
	var modifiedObj = modEvtData.target;
	
	if (modifiedObj.angle && snap) {
		modifiedObj.setAngle(closestAngle).setCoords();
		snap = false;
		canvas.renderAll();
	}
	
});