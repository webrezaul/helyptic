/*--------------------- Fade Animation Time ----------------------*/
AOS.init({
	duration: 1200
});
/* Slide Menu - Mobile */
var a = $(window).height();
console.log(a);

function NavContainerShownNone() {
	var elem = $('#menuToggle');
	var menus = $('#fixit');
	if (!elem.hasClass('showit')) {
		elem.addClass('showit');
		menus.addClass('fixedit');
	} else {
		elem.removeClass('showit');
		menus.removeClass('fixedit');
	}
}
/* Remove Menu on clicking of "Contact Button" */
function removeNavContainer() {
	NavContainerShownNone();
}
/*  SCROLL TO THE TOP */
var btn = $('#btn-scroll');
$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});
btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, '300');
});
if ($(window).height() > 900 && $(window).height() <= 1024) {
	window.onscroll = function() {
		FixedParagraph()
	};
}
if ($(window).height() > 1024 && $(window).height() <= 1366) {
	window.onscroll = function() {
		FixedParagraph2()
	};
}
/*  Make Direction and Paragraph Fixed - Home */
var header = document.getElementById("tabing");
var sticky = header.offsetTop;
function FixedParagraph() {
	var f = $(this).scrollTop();
	if (window.pageYOffset > sticky && f < 6000) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}
function FixedParagraph2() {
	var f = $(this).scrollTop();
	if (window.pageYOffset > sticky && f < 7800) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}
/* Contact Form - Submission */
window.addEventListener("DOMContentLoaded", function() {
	/* Get the form elements defined in your form HTML above */
	var form = document.getElementById("contact-form");
	var button = document.getElementById("my-form-button");
	var status = document.getElementById("my-form-status");
	/* Success and Error functions for after the form is submitted  */
	function success() {
		grecaptcha.reset();
		form.reset();
		button.style = "display: none";
		status.innerHTML = "Thanks: Will be in Touch Soon!";
	}

	function error() {
		status.innerHTML = "Oops! There was a problem.";
	}

	function captcha() {
		if (grecaptcha.getResponse().length !== 0) {
			console.log("The captcha has been already solved");
		}
	}
	/* Handle the form submission event */
	form.addEventListener("submit", function(ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});
/* Helper function for sending an AJAX request */
function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}
/* Email Us Form - SUBMISSTION */
window.addEventListener("DOMContentLoaded", function() {
	/* Get the form elements defined in your form HTML above */
	var form = document.getElementById("Email-Form");
	var button = document.getElementById("Email-Us");
	var status = document.getElementById("Email-Status");
	/* Success and Error functions for after the form is submitted */
	function success() {
		form.reset();
		status.innerHTML = "Thanks: Will be in Touch Soon!";
	}
	function error() {
		status.innerHTML = "Oops! There was a problem.";
	}
	/* Handle the form submission event */
	form.addEventListener("submit", function(ev) {
		ev.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});
/* Helper function for sending an AJAX request  */
function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}
/*======================= SIDERS ================================ */
// vars
'use strict'
var testim = document.getElementById("testim"),
	testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
	testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
	testimLeftArrow = document.getElementById("left-arrow"),
	testimRightArrow = document.getElementById("right-arrow"),
	testimSpeed = 4500,
	currentSlide = 0,
	currentActive = 0,
	testimTimer,
	touchStartPos,
	touchEndPos,
	touchPosDiff,
	ignoreTouch = 30;;
window.onload = function() {
	// Testim Script
	function playSlide(slide) {
		for (var k = 0; k < testimDots.length; k++) {
			testimContent[k].classList.remove("active");
			testimContent[k].classList.remove("inactive");
			testimDots[k].classList.remove("active");
		}
		if (slide < 0) {
			slide = currentSlide = testimContent.length - 1;
		}
		if (slide > testimContent.length - 1) {
			slide = currentSlide = 0;
		}
		if (currentActive != currentSlide) {
			testimContent[currentActive].classList.add("inactive");
		}
		testimContent[slide].classList.add("active");
		testimDots[slide].classList.add("active");
		currentActive = currentSlide;
		clearTimeout(testimTimer);
		testimTimer = setTimeout(function() {
			playSlide(currentSlide += 1);
		}, testimSpeed)
	}
	testimLeftArrow.addEventListener("click", function() {
		playSlide(currentSlide -= 1);
	})
	testimRightArrow.addEventListener("click", function() {
		playSlide(currentSlide += 1);
	})
	for (var l = 0; l < testimDots.length; l++) {
		testimDots[l].addEventListener("click", function() {
			playSlide(currentSlide = testimDots.indexOf(this));
		})
	}
	playSlide(currentSlide);
	// keyboard shortcuts
	document.addEventListener("keyup", function(e) {
		switch (e.keyCode) {
			case 37:
				testimLeftArrow.click();
				break;
			case 39:
				testimRightArrow.click();
				break;
			case 39:
				testimRightArrow.click();
				break;
			default:
				break;
		}
	})
	testim.addEventListener("touchstart", function(e) {
		touchStartPos = e.changedTouches[0].clientX;
	})
	testim.addEventListener("touchend", function(e) {
		touchEndPos = e.changedTouches[0].clientX;
		touchPosDiff = touchStartPos - touchEndPos;
		console.log(touchPosDiff);
		console.log(touchStartPos);
		console.log(touchEndPos);
		if (touchPosDiff > 0 + ignoreTouch) {
			testimLeftArrow.click();
		} else if (touchPosDiff < 0 - ignoreTouch) {
			testimRightArrow.click();
		} else {
			return;
		}
	})
}


