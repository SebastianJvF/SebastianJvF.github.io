function createTwoDPhoneModel() {
	canvas.clear();

	var depth = arguments[0], width = arguments[1], height = arguments[2];

	var spacing = 18;
	var topFirst = (canvasHeight-2*spacing-height-2*depth)/2;
	var topSecond = topFirst+depth+spacing;
	var topThird = topSecond+height+spacing;

	var leftFirst = ((canvasWidth)-width-2*depth-2*spacing)/2;
	var leftSecond = leftFirst + depth + spacing;
	var leftThird = leftSecond + width + spacing;

	middleRect = new fabric.Rect({
			top : topSecond,
			left : leftSecond,
			width : width,
			height : height,
			fill : modelColor,
			strokeWidth : modelStrokeWidth,
			stroke: modelStrokeColor
	});

	leftRect = new fabric.Rect({
			top : topSecond,
			left : leftFirst,
			width : depth,
			height : height,
			fill : modelColor,
			strokeWidth : modelStrokeWidth,
			stroke: modelStrokeColor
	});

	rightRect = new fabric.Rect({
			top : topSecond,
			left : leftThird,
			width : depth,
			height : height,
			fill : modelColor,
			strokeWidth : modelStrokeWidth,
			stroke: modelStrokeColor
	});

	topRect = new fabric.Rect({
			top : topFirst,
			left : leftSecond,
			width : width,
			height : depth,
			fill : modelColor,
			strokeWidth : modelStrokeWidth,
			stroke: modelStrokeColor
	});

	bottomRect = new fabric.Rect({
			top : topThird,
			left : leftSecond,
			width : width,
			height : depth,
			fill : modelColor,
			strokeWidth : modelStrokeWidth,
			stroke: modelStrokeColor
	});

	canvas.add(middleRect);
	canvas.add(leftRect);
	canvas.add(rightRect);
	canvas.add(topRect);
	canvas.add(bottomRect);

	var element;

	/* Add additional objects */
	for(var i = 3; i < arguments.length; i++) {
			canvas.add(arguments[i]);
	}

	/* Make mock-up unselectable */
	canvas.item(0).selectable = false;
	canvas.item(1).selectable = false;
	canvas.item(2).selectable = false;
	canvas.item(3).selectable = false;
	canvas.item(4).selectable = false;
	for(var i = 5; i < arguments.length+5-3; i++) {
			canvas.item(i).selectable = false;
	}

	canvas.item(0).setCoords();
	canvas.item(1).setCoords();
	canvas.item(2).setCoords();
	canvas.item(3).setCoords();
	canvas.item(4).setCoords();
	for(var i = 5; i < arguments.length+5-3; i++) {
			canvas.item(i).setCoords();
	}

	canvas.renderAll();
}
