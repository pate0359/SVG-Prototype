//MyWidget Script
/**************************
Add a link for a CSS file that styles .mywidget
Add a script tag that points to CDN version of jQuery 1.*
Add a script tag that loads your script file from http://m.edumedia.ca/
**************************/

var microphone;
var headphone;
var leftEar;
var rightEar

$(document).ready(function () {

	
	loadSVGInlineH();
	loadSVGInlineM();
});

function loadSVGInlineH()
{
	
    var SVGFile="headphone.svg"
    var loadXML = new XMLHttpRequest;
    function handler(){
        if(loadXML.readyState == 4 && loadXML.status == 200)
        {
			alert("loadSVGInlineH");
            $("body").innerHTML=loadXML.responseText
        }
    }
    if (loadXML != null){
        loadXML.open("GET", SVGFile, true);
        loadXML.onreadystatechange = handler;
        loadXML.send();
    }
}

function loadSVGInlineM()
{
	
    var SVGFile="microphone.svg"
    var loadXML = new XMLHttpRequest;
    function handler(){
        if(loadXML.readyState == 4 && loadXML.status == 200)
        {
			alert("loadSVGInlineM");
            $("body").innerHTML=loadXML.responseText
        }
    }
    if (loadXML != null){
        loadXML.open("GET", SVGFile, true);
        loadXML.onreadystatechange = handler;
        loadXML.send();
    }
}



$(window).load(function () {

//	alert("load");
/************* for Headphone *****************/
	
	var a = document.getElementById("svg-hp");
	var headphone = a.contentDocument; //get the inner DOM of ex.svg
	var delta=$(headphone).find("#HeadPhone");
	leftEar = $(headphone).find("#indicator-left"); //get the inner element by id
	rightEar = $(headphone).find("#indicator-right"); //get the inner element by id
	leftEar.attr("fill", "red");
	rightEar.attr("fill", "red");
	
	// Fade in/out for Bluetooth button
		function runItLeft() {
			   $(headphone).find("#BL-left").animate({opacity:'1'}, 800);
			   $(headphone).find("#BL-left").animate({opacity:'0.2'}, 800, runItLeft);
			
			}
			runItLeft();
	
	function runItR() {
			   $(headphone).find("#BL-right").animate({opacity:'1'}, 800);
			   $(headphone).find("#BL-right").animate({opacity:'0.2'}, 800, runItR);
			
			}
			runItR();
	
	
	$(headphone).find("#rect-right").on("mouseover", function () {
		
		$(headphone).find("#BL-left").stop();
		$(headphone).find("#BL-left").opacity=1.0
		$(headphone).find("#BL-right").stop();
		$(headphone).find("#BL-right").opacity=1.0
	});
	$(headphone).find("#rect-right").on("mouseover", function () {
		
		$(headphone).find("#BL-left").stop();
		$(headphone).find("#BL-left").opacity=1.0
		$(headphone).find("#BL-right").stop();
		$(headphone).find("#BL-right").opacity=1.0
	});
	
	$(headphone).find("#earbird-left").on("mouseover", function () {
		
		$(headphone).find("#BL-left").stop();
		$(headphone).find("#BL-left").opacity=1.0
		$(headphone).find("#BL-right").stop();
		$(headphone).find("#BL-right").opacity=1.0
	});
	$(headphone).find("#earbird-right").on("mouseover", function () {
		
		$(headphone).find("#BL-left").stop();
		$(headphone).find("#BL-left").opacity=1.0
		$(headphone).find("#BL-right").stop();
		$(headphone).find("#BL-right").opacity=1.0
	});
	

	$(delta).on("click", function () {
		
		var blu_left = $(headphone).find("#BL-left"); 
		var blu_right = $(headphone).find("#BL-right"); 
		
		leftEar.attr("fill", "green");
		rightEar.attr("fill", "green");
		
	});

/************* for Microphone *****************/
	
	var b = document.getElementById("svg-mp");
	var microphone = b.contentDocument; //get the inner DOM of ex.svg
	var deltab = $(microphone).find("#microphone-svg"); //get the inner element by id
	
	var indicator=$(microphone).find("#indicator");
	console.log("indicator"+indicator);
	indicator.attr("fill", "red");
	
	function runItCabel() {
			   $(microphone).find("#cable").animate({opacity:'1'}, 600);
			   $(microphone).find("#cable").animate({opacity:'0.4'}, 600, runItCabel);
			
			}
	runItCabel();
	
	
	$(deltab).on("click", function () {

		$(microphone).find("#indicator").attr("fill","green");
		
	});
		
	$(microphone).find("#microphone").on( "mouseover", function() {
		$(microphone).find("#cable").opacity=1;
		$(microphone).find("#cable").stop();
		
	}).on( "mouseleave", function() {
		
		$(microphone).find("#indicator").attr("fill","red");
  	});
	
});
