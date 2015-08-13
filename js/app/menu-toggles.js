/* MENU TOGGLES */
$(document).ready(function () {
	/* Hide all option panels */
	$("#info-message").hide();
	$("nav div.options").hide();

  	/* Change all the description divs into links */
	$("nav div.description").each(function () {
		var contentDescription = $(this).text()
		$(this).replaceWith('<a href="" title="Click to view the sub menu" class="description">' + contentDescription + '<\/a>') ;
	});

	/* Change the onclick function of the created links*/
	$("nav a.description").click( function () {

		/* If the menue is open, close it; Remark: next takes the next element of the same parent of the given element */
		if ($(this).next("div.options:visible").length != 0) {
			$(this).next("div.options").slideUp("normal");
		} else { /* Otherwise open it */
			/* Close all other menues */
			$("nav div.options").slideUp("normal");
			/* Open the next div.options we can find */
			$(this).next("div.options").slideDown("normal");
		}

		/* User study */
		clickCounter++;
		// alert(clickCounter);

		/* So that the browser does not try to open the link */
	    return false;
	});
});
