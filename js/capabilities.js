/* Targeting Div of Capability page */
$(document).ready(function() {
	var index = getParameterByName('index');
	if (index == 1) {
		window.location.href = '#Capabilities';
		DisplayStudyFunction();
	} else if (index == 2) {
		window.location.href = '#Capabilities';
		DisplayStudyFunction();
	} else if (index == 3) {
		window.location.href = '#Capabilities';
		DisplayStudyFunction();
	} else if (index == 4) {
		window.location.href = '#Capabilities';
		DisplayDevelopFunction();
	} else if (index == 5) {
		window.location.href = '#Capabilities';
		DisplaySoftwareDevelopFunction();
	} else if (index == 6) {
		window.location.href = '#Capabilities';
		DisplayIndustyFunction();
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
/*  ==========  Switching/Trigring - Capabilities | Desktop/Mobile/Tab ========= */
/* Switch To Embedded System - Capabilities */
function DisplayDevelopFunction() {
	document.getElementById("ElectronicDesign").style.display = "none";
	document.getElementById("EmbeddedSystems").style.display = "block";
	document.getElementById("SoftwareDevelopment").style.display = "none";
	document.getElementById("IOTConnectedObjects").style.display = "none";
	document.getElementById("Connectivities").style.display = "none";
	document.getElementById("Sensors").style.display = "none";
	document.getElementById("DataProcessing").style.display = "none";
	document.getElementById("ElectronicDesign-tab").style.display = "none";
	document.getElementById("EmbeddedSystems-tab").style.display = "block";
	document.getElementById("SoftwareDevelopment-tab").style.display = "none";
	document.getElementById("IOTConnectedObjects-tab").style.display = "none";
	document.getElementById("Connectivities-tab").style.display = "none";
	document.getElementById("Sensors-tab").style.display = "none";
	document.getElementById("DataProcessing-tab").style.display = "none";
	document.getElementById("ElectronicDesign-mobile").style.display = "none";
	document.getElementById("EmbeddedSystems-mobile").style.display = "block";
	document.getElementById("SoftwareDevelopment-mobile").style.display = "none";
	document.getElementById("IOTConnectedObjects-mobile").style.display = "none";
	document.getElementById("Connectivities-mobile").style.display = "none";
	document.getElementById("Sensors-mobile").style.display = "none";
	document.getElementById("DataProcessing-mobile").style.display = "none";
	$('.DisplayMobileApplDevelopFunction').removeClass("active");
	$('.DisplaywebDevelopFunction').removeClass("active");
	$('.DisplayEmbeddedSoftDevelopFunction').removeClass("active");
	$('.hardware-focus').addClass("active");
	$('.dropbtn').removeClass("active");
	$('.makestudyactive').removeClass("active");
	$('.makesoftdevelopactive').removeClass("active");
	$('.makeindustryactive').removeClass("active");
	$('.makemanufecactive').removeClass("active");
}
/* Switch To Electronic Design - Capabilities */
function DisplayStudyFunction() {
	document.getElementById("ElectronicDesign").style.display = "block";
	document.getElementById("EmbeddedSystems").style.display = "none";
	document.getElementById("SoftwareDevelopment").style.display = "none";
	document.getElementById("IOTConnectedObjects").style.display = "none";
	document.getElementById("Connectivities").style.display = "none";
	document.getElementById("Sensors").style.display = "none";
	document.getElementById("DataProcessing").style.display = "none";
	document.getElementById("ElectronicDesign-tab").style.display = "block";
	document.getElementById("EmbeddedSystems-tab").style.display = "none";
	document.getElementById("SoftwareDevelopment-tab").style.display = "none";
	document.getElementById("IOTConnectedObjects-tab").style.display = "none";
	document.getElementById("Connectivities-tab").style.display = "none";
	document.getElementById("Sensors-tab").style.display = "none";
	document.getElementById("DataProcessing-tab").style.display = "none";
	document.getElementById("ElectronicDesign-mobile").style.display = "block";
	document.getElementById("EmbeddedSystems-mobile").style.display = "none";
	document.getElementById("SoftwareDevelopment-mobile").style.display = "none";
	document.getElementById("IOTConnectedObjects-mobile").style.display = "none";
	document.getElementById("Connectivities-mobile").style.display = "none";
	document.getElementById("Sensors-mobile").style.display = "none";
	document.getElementById("DataProcessing-mobile").style.display = "none";
	$('.DisplayMobileApplDevelopFunction').removeClass("active");
	$('.DisplaywebDevelopFunction').removeClass("active");
	$('.DisplayEmbeddedSoftDevelopFunction').removeClass("active");
	$('.hardware-focus').removeClass("active");
	$('.makestudyactive').addClass("active");
	$('.dropbtn').removeClass("active");
	$('.makesoftdevelopactive').removeClass("active");
	$('.makeindustryactive').removeClass("active");
	$('.makemanufecactive').removeClass("active");
}
/* Switch To Software Development - Capabilities */
function DisplaySoftDevelopFunction() {
	document.getElementById("ElectronicDesign").style.display = "none";
	document.getElementById("EmbeddedSystems").style.display = "none";
	document.getElementById("SoftwareDevelopment").style.display = "block";
	document.getElementById("IOTConnectedObjects").style.display = "none";
	document.getElementById("Connectivities").style.display = "none";
	document.getElementById("Sensors").style.display = "none";
	document.getElementById("DataProcessing").style.display = "none";
	document.getElementById("ElectronicDesign-tab").style.display = "none";
	document.getElementById("EmbeddedSystems-tab").style.display = "none";
	document.getElementById("SoftwareDevelopment-tab").style.display = "block";
	document.getElementById("IOTConnectedObjects-tab").style.display = "none";
	document.getElementById("Connectivities-tab").style.display = "none";
	document.getElementById("Sensors-tab").style.display = "none";
	document.getElementById("DataProcessing-tab").style.display = "none";
	document.getElementById("ElectronicDesign-mobile").style.display = "none";
	document.getElementById("EmbeddedSystems-mobile").style.display = "none";
	document.getElementById("SoftwareDevelopment-mobile").style.display = "block";
	document.getElementById("IOTConnectedObjects-mobile").style.display = "none";
	document.getElementById("Connectivities-mobile").style.display = "none";
	document.getElementById("Sensors-mobile").style.display = "none";
	document.getElementById("DataProcessing-mobile").style.display = "none";
	$('.DisplayMobileApplDevelopFunction').removeClass("active");
	$('.DisplaywebDevelopFunction').removeClass("active");
	$('.DisplayEmbeddedSoftDevelopFunction').removeClass("active");
	$('.hardware-focus').removeClass("active");
	$('.makestudyactive').removeClass("active");
	$('.dropbtn').removeClass("active");
	$('.makesoftdevelopactive').addClass("active");
	$('.makeindustryactive').removeClass("active");
	$('.makemanufecactive').removeClass("active");
}
/* Switch To Software Development - Capabilities */
function DisplayIndustyFunction() {
	document.getElementById("ElectronicDesign").style.display = "none";
	document.getElementById("EmbeddedSystems").style.display = "none";
	document.getElementById("SoftwareDevelopment").style.display = "block";
	document.getElementById("IOTConnectedObjects").style.display = "none";
	document.getElementById("Connectivities").style.display = "none";
	document.getElementById("Sensors").style.display = "none";
	document.getElementById("DataProcessing").style.display = "none";
	document.getElementById("ElectronicDesign-tab").style.display = "none";
	document.getElementById("EmbeddedSystems-tab").style.display = "none";
	document.getElementById("SoftwareDevelopment-tab").style.display = "block";
	document.getElementById("IOTConnectedObjects-tab").style.display = "none";
	document.getElementById("Connectivities-tab").style.display = "none";
	document.getElementById("Sensors-tab").style.display = "none";
	document.getElementById("DataProcessing-tab").style.display = "none";
	document.getElementById("ElectronicDesign-mobile").style.display = "none";
	document.getElementById("EmbeddedSystems-mobile").style.display = "none";
	document.getElementById("SoftwareDevelopment-mobile").style.display = "block";
	document.getElementById("IOTConnectedObjects-mobile").style.display = "none";
	document.getElementById("Connectivities-mobile").style.display = "none";
	document.getElementById("Sensors-mobile").style.display = "none";
	document.getElementById("DataProcessing-mobile").style.display = "none";
	$('.DisplayMobileApplDevelopFunction').removeClass("active");
	$('.DisplaywebDevelopFunction').removeClass("active");
	$('.DisplayEmbeddedSoftDevelopFunction').removeClass("active");
	$('.hardware-focus').removeClass("active");
	$('.makestudyactive').removeClass("active");
	$('.dropbtn').removeClass("active");
	$('.makesoftdevelopactive').removeClass("active");
	$('.makeindustryactive').addClass("active");
	$('.makemanufecactive').removeClass("active");
}
/* Switch To IOT Connected Objects - Capabilities */
function DisplaySoftwareDevelopFunction() {
	document.getElementById("ElectronicDesign").style.display = "none";
	document.getElementById("EmbeddedSystems").style.display = "none";
	document.getElementById("SoftwareDevelopment").style.display = "none";
	document.getElementById("IOTConnectedObjects").style.display = "block";
	document.getElementById("Connectivities").style.display = "none";
	document.getElementById("Sensors").style.display = "none";
	document.getElementById("DataProcessing").style.display = "none";
	document.getElementById("ElectronicDesign-tab").style.display = "none";
	document.getElementById("EmbeddedSystems-tab").style.display = "none";
	document.getElementById("SoftwareDevelopment-tab").style.display = "none";
	document.getElementById("IOTConnectedObjects-tab").style.display = "block";
	document.getElementById("Connectivities-tab").style.display = "none";
	document.getElementById("Sensors-tab").style.display = "none";
	document.getElementById("DataProcessing-tab").style.display = "none";
	document.getElementById("ElectronicDesign-mobile").style.display = "none";
	document.getElementById("EmbeddedSystems-mobile").style.display = "none";
	document.getElementById("SoftwareDevelopment-mobile").style.display = "none";
	document.getElementById("IOTConnectedObjects-mobile").style.display = "block";
	document.getElementById("Connectivities-mobile").style.display = "none";
	document.getElementById("Sensors-mobile").style.display = "none";
	document.getElementById("DataProcessing-mobile").style.display = "none";
	$('.DisplayMobileApplDevelopFunction').removeClass("active");
	$('.DisplaywebDevelopFunction').removeClass("active");
	$('.DisplayEmbeddedSoftDevelopFunction').removeClass("active");
	$('.makestudyactive').removeClass("active");
	$('.dropbtn').removeClass("active");
	$('.makesoftdevelopactive').removeClass("active");
	$('.hardware-focus').removeClass("active");
	$('.makeindustryactive').removeClass("active");
	$('.makemanufecactive').removeClass("active");
	$('#software-develop').addClass("active");
}
/* Switch To IOT Connected Objects -> Connectivities - Capabilities */
function DisplayEmbeddedSoftDevelopFunction() {
	document.getElementById("ElectronicDesign").style.display = "none";
	document.getElementById("EmbeddedSystems").style.display = "none";
	document.getElementById("SoftwareDevelopment").style.display = "none";
	document.getElementById("IOTConnectedObjects").style.display = "none";
	document.getElementById("Connectivities").style.display = "block";
	document.getElementById("Sensors").style.display = "none";
	document.getElementById("DataProcessing").style.display = "none";
	document.getElementById("ElectronicDesign-tab").style.display = "none";
	document.getElementById("EmbeddedSystems-tab").style.display = "none";
	document.getElementById("SoftwareDevelopment-tab").style.display = "none";
	document.getElementById("IOTConnectedObjects-tab").style.display = "none";
	document.getElementById("Connectivities-tab").style.display = "block";
	document.getElementById("Sensors-tab").style.display = "none";
	document.getElementById("DataProcessing-tab").style.display = "none";
	document.getElementById("ElectronicDesign-mobile").style.display = "none";
	document.getElementById("EmbeddedSystems-mobile").style.display = "none";
	document.getElementById("SoftwareDevelopment-mobile").style.display = "none";
	document.getElementById("IOTConnectedObjects-mobile").style.display = "none";
	document.getElementById("Connectivities-mobile").style.display = "block";
	document.getElementById("Sensors-mobile").style.display = "none";
	document.getElementById("DataProcessing-mobile").style.display = "none";
	$('.DisplayMobileApplDevelopFunction').removeClass("active");
	$('.DisplaywebDevelopFunction').removeClass("active");
	$('.DisplayEmbeddedSoftDevelopFunction').addClass("active");
	$('.makestudyactive').removeClass("active");
	$('.dropbtn').removeClass("active");
	$('.makesoftdevelopactive').removeClass("active");
	$('.hardware-focus').removeClass("active");
	$('.makeindustryactive').removeClass("active");
	$('.makemanufecactive').removeClass("active");
	$('#software-develop').removeClass("active");
}
/* Switch To IOT Connected Objects -> Sensors - Capabilities */
function DisplaywebDevelopFunction() {
	document.getElementById("ElectronicDesign").style.display = "none";
	document.getElementById("EmbeddedSystems").style.display = "none";
	document.getElementById("SoftwareDevelopment").style.display = "none";
	document.getElementById("IOTConnectedObjects").style.display = "none";
	document.getElementById("Connectivities").style.display = "none";
	document.getElementById("Sensors").style.display = "block";
	document.getElementById("DataProcessing").style.display = "none";
	document.getElementById("ElectronicDesign-tab").style.display = "none";
	document.getElementById("EmbeddedSystems-tab").style.display = "none";
	document.getElementById("SoftwareDevelopment-tab").style.display = "none";
	document.getElementById("IOTConnectedObjects-tab").style.display = "none";
	document.getElementById("Connectivities-tab").style.display = "none";
	document.getElementById("Sensors-tab").style.display = "block";
	document.getElementById("DataProcessing-tab").style.display = "none";
	document.getElementById("ElectronicDesign-mobile").style.display = "none";
	document.getElementById("EmbeddedSystems-mobile").style.display = "none";
	document.getElementById("SoftwareDevelopment-mobile").style.display = "none";
	document.getElementById("IOTConnectedObjects-mobile").style.display = "none";
	document.getElementById("Connectivities-mobile").style.display = "none";
	document.getElementById("Sensors-mobile").style.display = "block";
	document.getElementById("DataProcessing-mobile").style.display = "none";
	$('.DisplayMobileApplDevelopFunction').removeClass("active");
	$('.DisplaywebDevelopFunction').addClass("active");
	$('.DisplayEmbeddedSoftDevelopFunction').removeClass("active");
	$('.makestudyactive').removeClass("active");
	$('.dropbtn').removeClass("active");
	$('.makesoftdevelopactive').removeClass("active");
	$('.hardware-focus').removeClass("active");
	$('.makeindustryactive').removeClass("active");
	$('.makemanufecactive').removeClass("active");
	$('#software-develop').removeClass("active");
}
/* Switch To IOT Connected Objects -> Data Processing - Capabilities */
function DisplayMobileApplDevelopFunction() {
	document.getElementById("ElectronicDesign").style.display = "none";
	document.getElementById("EmbeddedSystems").style.display = "none";
	document.getElementById("SoftwareDevelopment").style.display = "none";
	document.getElementById("IOTConnectedObjects").style.display = "none";
	document.getElementById("Connectivities").style.display = "none";
	document.getElementById("Sensors").style.display = "none";
	document.getElementById("DataProcessing").style.display = "block";
	document.getElementById("ElectronicDesign-tab").style.display = "none";
	document.getElementById("EmbeddedSystems-tab").style.display = "none";
	document.getElementById("SoftwareDevelopment-tab").style.display = "none";
	document.getElementById("IOTConnectedObjects-tab").style.display = "none";
	document.getElementById("Connectivities-tab").style.display = "none";
	document.getElementById("Sensors-tab").style.display = "none";
	document.getElementById("DataProcessing-tab").style.display = "block";
	document.getElementById("ElectronicDesign-mobile").style.display = "none";
	document.getElementById("EmbeddedSystems-mobile").style.display = "none";
	document.getElementById("SoftwareDevelopment-mobile").style.display = "none";
	document.getElementById("IOTConnectedObjects-mobile").style.display = "none";
	document.getElementById("Connectivities-mobile").style.display = "none";
	document.getElementById("Sensors-mobile").style.display = "none";
	document.getElementById("DataProcessing-mobile").style.display = "block";
	$('.DisplayMobileApplDevelopFunction').addClass("active");
	$('.DisplaywebDevelopFunction').removeClass("active");
	$('.DisplayEmbeddedSoftDevelopFunction').removeClass("active");
	$('.makestudyactive').removeClass("active");
	$('.dropbtn').removeClass("active");
	$('.makesoftdevelopactive').removeClass("active");
	$('.hardware-focus').removeClass("active");
	$('.makeindustryactive').removeClass("active");
	$('.makemanufecactive').removeClass("active");
	$('#software-develop').removeClass("active");
}