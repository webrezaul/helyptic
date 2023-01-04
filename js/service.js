/* Targeting Div of Capability page */
$(document).ready(function() {
	var index = getParameterByName('index');
	if (index == 1) {
		window.location.href = '#Services';
		One();
	} else if (index == 2) {
		window.location.href = '#Services';
		two();
	} else if (index == 3) {
		window.location.href = '#Services';
		three();
	} else if (index == 4) {
		window.location.href = '#Services';
		four();
	} else if (index == 5) {
		window.location.href = '#Services';
		five();
	}
});
/* Targeting each div by numbers */
function getParameterByName(name) {
	url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
/*  ==========  Switching/Trigring - Services | Desktop/Mobile/Tab ========= */
/* Switch to Project Study - One -> Services */
function one() {
	document.getElementById("one").style.display = "block";
	document.getElementById("two").style.display = "none";
	document.getElementById("three").style.display = "none";
	document.getElementById("four").style.display = "none";
	document.getElementById("five").style.display = "none";
	document.getElementById("one-tab").style.display = "block";
	document.getElementById("two-tab").style.display = "none";
	document.getElementById("three-tab").style.display = "none";
	document.getElementById("four-tab").style.display = "none";
	document.getElementById("five-tab").style.display = "none";
	document.getElementById("one-mobile").style.display = "block";
	document.getElementById("two-mobile").style.display = "none";
	document.getElementById("three-mobile").style.display = "none";
	document.getElementById("four-mobile").style.display = "none";
	document.getElementById("five-mobile").style.display = "none";
	$('.one').addClass("active");
	$('.two').removeClass("active");
	$('.three').removeClass("active");
	$('.four').removeClass("active");
	$('.five').removeClass("active");
}
/* Switch to Hardware Development - Two -> Services */
function two() {
	document.getElementById("one").style.display = "none";
	document.getElementById("two").style.display = "block";
	document.getElementById("three").style.display = "none";
	document.getElementById("four").style.display = "none";
	document.getElementById("five").style.display = "none";
	document.getElementById("one-tab").style.display = "none";
	document.getElementById("two-tab").style.display = "block";
	document.getElementById("three-tab").style.display = "none";
	document.getElementById("four-tab").style.display = "none";
	document.getElementById("five-tab").style.display = "none";
	document.getElementById("one-mobile").style.display = "none";
	document.getElementById("two-mobile").style.display = "block";
	document.getElementById("three-mobile").style.display = "none";
	document.getElementById("four-mobile").style.display = "none";
	document.getElementById("five-mobile").style.display = "none";
	$('.one').removeClass("active");
	$('.two').addClass("active");
	$('.three').removeClass("active");
	$('.four').removeClass("active");
	$('.five').removeClass("active");
}
/* Switch to Embedded Software Development - Three -> Services */
function three() {
	document.getElementById("one").style.display = "none";
	document.getElementById("two").style.display = "none";
	document.getElementById("three").style.display = "block";
	document.getElementById("four").style.display = "none";
	document.getElementById("five").style.display = "none";
	document.getElementById("one-tab").style.display = "none";
	document.getElementById("two-tab").style.display = "none";
	document.getElementById("three-tab").style.display = "block";
	document.getElementById("four-tab").style.display = "none";
	document.getElementById("five-tab").style.display = "none";
	document.getElementById("one-mobile").style.display = "none";
	document.getElementById("two-mobile").style.display = "none";
	document.getElementById("three-mobile").style.display = "block";
	document.getElementById("four-mobile").style.display = "none";
	document.getElementById("five-mobile").style.display = "none";
	$('.one').removeClass("active");
	$('.two').removeClass("active");
	$('.three').addClass("active");
	$('.four').removeClass("active");
	$('.five').removeClass("active");
}
/* Switch to Industrialisation - Four -> Services */
function four() {
	document.getElementById("one").style.display = "none";
	document.getElementById("two").style.display = "none";
	document.getElementById("three").style.display = "none";
	document.getElementById("four").style.display = "block";
	document.getElementById("five").style.display = "none";
	document.getElementById("one-tab").style.display = "none";
	document.getElementById("two-tab").style.display = "none";
	document.getElementById("three-tab").style.display = "none";
	document.getElementById("four-tab").style.display = "block";
	document.getElementById("five-tab").style.display = "none";
	document.getElementById("one-mobile").style.display = "none";
	document.getElementById("two-mobile").style.display = "none";
	document.getElementById("three-tab").style.display = "none";
	document.getElementById("four-mobile").style.display = "block";
	document.getElementById("five-mobile").style.display = "none";
	$('.one').removeClass("active");
	$('.two').removeClass("active");
	$('.three').removeClass("active");
	$('.four').addClass("active");
	$('.five').removeClass("active");
}
/* Switch to Manufacturing - Five -> Services */
function five() {
	document.getElementById("one").style.display = "none";
	document.getElementById("two").style.display = "none";
	document.getElementById("three").style.display = "none";
	document.getElementById("four").style.display = "none";
	document.getElementById("five").style.display = "block";
	document.getElementById("one-tab").style.display = "none";
	document.getElementById("two-tab").style.display = "none";
	document.getElementById("three-tab").style.display = "none";
	document.getElementById("four-tab").style.display = "none";
	document.getElementById("five-tab").style.display = "block";
	document.getElementById("one-mobile").style.display = "none";
	document.getElementById("two-mobile").style.display = "none";
	document.getElementById("three-mobile").style.display = "none";
	document.getElementById("four-mobile").style.display = "none";
	document.getElementById("five-mobile").style.display = "block";
	$('.one').removeClass("active");
	$('.two').removeClass("active");
	$('.three').removeClass("active");
	$('.four').removeClass("active");
	$('.five').addClass("active");
}