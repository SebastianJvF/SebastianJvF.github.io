function createTwoDPhoneModel(depth, width, height) {
	canvas.clear();

	var spacing = 18;
	
	var topFirst = (canvasHeight-2*spacing-height-2*depth)/2;
	var topSecond = topFirst+depth+spacing;
	var topThird = topSecond+height+spacing;
	
	var leftFirst = ((canvasWidth)-width-2*depth-2*spacing)/2;
	var leftSecond = leftFirst + depth + spacing;
	var leftThird = leftSecond + width + spacing;
	
	var topCamera = topSecond + 15;
	var leftCamera = leftSecond + 15;
	
	var modelStrokeWidth = 2;
	var modelColor = '#ffffff';
	var modelStrokeColor = '#c3bfbf';
	
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
	
	cameraHole = new fabric.Circle({
			top: topCamera,
			left: leftCamera,
			radius: 12,
			fill : modelColor,
			strokeWidth : modelStrokeWidth,
			stroke: modelStrokeColor
	});
	
	canvas.add(middleRect);
	canvas.add(leftRect);
	canvas.add(rightRect);
	canvas.add(topRect);
	canvas.add(bottomRect);
	canvas.add(cameraHole);
		
	/* Make mock-up unselectable */
	canvas.item(0).selectable = false;
	canvas.item(1).selectable = false;
	canvas.item(2).selectable = false;
	canvas.item(3).selectable = false;
	canvas.item(4).selectable = false;
	canvas.item(5).selectable = false;
	
	canvas.item(0).setCoords();
	canvas.item(1).setCoords();
	canvas.item(2).setCoords();
	canvas.item(3).setCoords();
	canvas.item(4).setCoords();
	canvas.item(5).setCoords();
	
	canvas.renderAll();
}