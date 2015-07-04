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