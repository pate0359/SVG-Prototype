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

});

$(window).load(function () {

//	alert("load");
	// for headphone
	var a = document.getElementById("svg-hp");
	var headphone = a.contentDocument; //get the inner DOM of ex.svg
	var delta=$(headphone).find("#HeadPhone");
	leftEar = $(headphone).find("#indicator-left"); //get the inner element by id
	rightEar = $(headphone).find("#indicator-right"); //get the inner element by id
	leftEar.attr("fill", "red");
	rightEar.attr("fill", "red");
	
//	delta.className="path3";
//	
////	var path = svgDoc.querySelector("path3");
//	var total_length = delta.getTotalLength();
//	console.log("lenght "+total_length);

	$(delta).on("click", function () {
//		alert("headphone");
		
		var blu_left = $(headphone).find("#stick"); 
		var blu_right = $(headphone).find("#BL-right"); 
		
//		blu_left.className="blink";
//		blu_right.className="blink";
//		
		$(blu_left).attr("class", "blink");
		
		leftEar.attr("fill", "green");
		rightEar.attr("fill", "green");
		
	});

	// for micro phone
	
	
//	$(indicator ).click(function() {
//		  $( this ).toggleClass( "highlight" );
//		});
	
	var b = document.getElementById("svg-mp");
	var microphone = b.contentDocument; //get the inner DOM of ex.svg
	var deltab = $(microphone).find("#microphone-svg"); //get the inner element by id
	
	var indicator=$(microphone).find("#indicator");
	console.log("indicator"+indicator);
	indicator.attr("fill", "red");

	$(microphone).find("#cable").attr("x","20");
		$(microphone).find("#cable").attr("y","20");
	
	
	$(deltab).on("click", function () {
		alert("microphone clicked");
		
		$(microphone).find("#microphone-svg").attr("fill","red"); //toggleClass( "highlight" );
		
		var tooltip = d3.select("#indicator");
		var tooltipParent = tooltip.node().parentElement;

//		var matrix = this.getTransformToElement(tooltipParent)
		  var matrix =this.getTransformToElement(tooltipParent).translate(+this.getAttribute("cx"),+this.getAttribute("cy"));
      console.log(matrix);
		
		console.log(tooltip);
//		var HTMLabsoluteTip = d3.select("div.tooltip.absolute");
//		var HTMLfixedTip = d3.select("div.tooltip.fixed");
		
	});
		
	$(microphone).find("#microphone").on( "mouseover", function() {
    	$(microphone).find("#indicator").attr("fill","green");
//		startAnimation();
		
	}).on( "mouseleave", function() {
		
		$(microphone).find("#indicator").attr("fill","red");
//		stopAnimation();
  	});
	
});

var timerFunction = null;

    function startAnimation() {
        if(timerFunction == null) {
            timerFunction = setInterval(animate, 20);
        }
    }

    function stopAnimation() {
        if(timerFunction != null){
            clearInterval(timerFunction);
            timerFunction = null;
        }
    }

    function animate() {
        var element = $(microphone).find("#indicator");
//		element.transform( 'm0.9915, 0.1301, -0.1301, 0.9915, 63.9829 -8.3579' );
//		element.width
        var x = $(element).attr("width");
//		SVGRect getBBox();
		var off=$(microphone).find("#indicator").getBBox();
		console.log(off);
        var newX = 2 + parseInt(x);
        if(newX > 500) {
            newX = 20;
        }
        $(element).attr("x", newX);
    }