/* INFORMATION MESSAGES */
var showMessageRed = '#FF6060';
var showMessageBlue = '#6088FF';

function showMessage(message, backgroundColor) {
	$("#info-message").html(message);
	$("#info-message").css("background-color", backgroundColor);
	$("#info-message").show().delay(5000).fadeOut();
	$("#info-message").slideUp("normal");
}