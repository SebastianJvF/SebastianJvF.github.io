var buttonTypes = ['small-push-button', 'big-push-button', 'rocker-button', 'slider-2-positions', 'slider-3-positions', 'slider-5-positions'];

function ButtonObject (type, positionX, positionY) {
	this.type = type;
	this.positionX = positionX;
	this.positionY = positionY;
	this.getPosition = getButtonPosition;
}

function getButtonPosition() {
	return {positionX: this.positionX, positionY: this.positionY};
}