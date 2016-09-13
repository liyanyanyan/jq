// JavaScript Document
var mins=15;
var maxs=200;
var times=1000;
var snow=$("<div> </div>").css("position","absolute").html("*");

$(function(){
	ShowPic();
	var screenWidth=$(document).width();
	var screenHeight=$(document).height();
	
	setInterval( function(){
		var startLeft=screenWidth*Math.random();
		var endLeft=screenWidth*Math.random();
		var snowS=mins+maxs*Math.random();
		var snowStartOpacity=0.7+0.5*Math.random();
		var snowEndOpacity=0.6;
		var snowFallTime=5000+10*screenHeight*Math.random();
		
		snow.clone().appendTo($("body")).css({
			"left":startLeft,
			"top":"-90px",
			"opacity":snowStartOpacity,
			"font-size":snowS,
			"color":"#fff"
			}).animate({
				"left":endLeft,
				"top":screenHeight+50,
				"opacity":snowEndOpacity,
				},snowFallTime,function(){
					$(this).remove();
				})
			},times);
	
	})
function ShowPic() {
    $(".im").eq(0).show().siblings().hide();
    var i = 0;
    setInterval(function () {
        i++;
        if (i == 6) {
            i = 0;
        }
        $(".im").eq(i).fadeIn(300).siblings().fadeOut(300);
    }, 3000);
}