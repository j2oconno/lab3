'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$(".jumbotron h1").text("Javascript is connected");
		$("#testjs").text("Appended text test");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("#submitBtn").click(updateProject);
}
function updateProject(e){
	var projectID = $('#project').val();
	$(projectID).animate({
		width: $('#width').val()
	});
	var newText = $('#description').val();
	$(projectID + " .project-discription").text(newText);
}

function projectClick(e){
	console.log("Project clicked");
	//Cancel the default action, which prevents the page from reloading
	e.preventDefault();

	//In an event listener, $(this) is the element that fired the event
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	//containingProject.append("<div class='project-discription'><p>Description of the project.</p></div>");
	var description = $(containingProject).find(".project-discription");

	if(description.length == 0){
		$(containingProject).append("<div class = 'project-description'><p>Description of the project.</p></div>");
	} else{
		description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}
	

	}