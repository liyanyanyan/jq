// JavaScript Document
var i = 0;
$(function () {
    var offset = $("#end").offset();
    $(".addcar").click(function () {
        i++;
        var img = $(this).parent().find("img").attr("src");
        var flyer = $('<img class="u-flyer" src="' + img + '">');
        flyer.fly({
            start:
                {
                    left: $(this).offset().left,
                    top: $(this).offset().top
                },
            end: {
                left: offset.left + 10,
                top: offset.top + 10,
                width: 0,
                height: 0
            },
            onEnd: function () {
                $("#num").text("(" + i + ")");
                $("#msg").show().animate({ width: '250px' }, 200).fadeOut(1000);
                flyer.remove(); 
            }
        });

    });
});
